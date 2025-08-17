<?php
session_start();
function h($s){ return htmlspecialchars(is_array($s)? implode(', ', $s): ($s ?? ''), ENT_QUOTES, 'UTF-8'); }

$defs = [
  'company' => FILTER_UNSAFE_RAW,
  'department' => FILTER_UNSAFE_RAW,
  'person' => FILTER_UNSAFE_RAW,
  'A_known' => FILTER_UNSAFE_RAW,
  'B_where' => [
    'filter' => FILTER_DEFAULT,
    'flags'  => FILTER_REQUIRE_ARRAY
  ],
  'B_magazine' => FILTER_UNSAFE_RAW,
  'B_other' => FILTER_UNSAFE_RAW,
  'C_use' => FILTER_UNSAFE_RAW,
  'D_other_vendor_use' => FILTER_UNSAFE_RAW,
  'D_other_text' => FILTER_UNSAFE_RAW,
  'E_vendors' => [
    'filter' => FILTER_DEFAULT,
    'flags'  => FILTER_REQUIRE_ARRAY
  ],
  'E_usecase' => [
    'filter' => FILTER_DEFAULT,
    'flags'  => FILTER_REQUIRE_ARRAY
  ],
  'E_usecase_other' => FILTER_UNSAFE_RAW,
  'F_priority' => FILTER_UNSAFE_RAW,
  'F_priority_other' => FILTER_UNSAFE_RAW,
  'G_interest' => FILTER_UNSAFE_RAW,
  'G_interest_other' => FILTER_UNSAFE_RAW,
  'H_filter_interest' => FILTER_UNSAFE_RAW,
  'H_filter_other' => FILTER_UNSAFE_RAW,
  'I_site_easy' => FILTER_UNSAFE_RAW,
  'I_site_other' => FILTER_UNSAFE_RAW,
  'I_site_suggestion' => FILTER_UNSAFE_RAW,
  'J_advice' => FILTER_UNSAFE_RAW,
  'email' => FILTER_VALIDATE_EMAIL,
  'website' => FILTER_UNSAFE_RAW,
];
$in = filter_input_array(INPUT_POST, $defs);

// honeypot
if (!empty($in['website'])) { http_response_code(400); exit('Bad request'); }

// 最低限のエラー（必要に応じて追加）
$errors = [];
if (!empty($_POST['email']) && $in['email']===false) $errors[] = 'メールアドレス形式が不正です。';

if ($errors) {
  echo '<!DOCTYPE html><meta charset="UTF-8"><h1>入力エラー</h1><ul>';
  foreach($errors as $e){ echo '<li>'.h($e).'</li>'; }
  echo '</ul><p><a href="form.html">戻る</a></p>'; exit;
}

// CSRF
$token = bin2hex(random_bytes(16));
$_SESSION['token'] = $token;
?>
<!DOCTYPE html><html lang="ja"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>入力内容の確認</title>
<base href="../">
<link rel="stylesheet" href="css/style.css">
</head><body>
<div id="header"></div>

<main class="container" style="max-width:860px;margin:40px auto;line-height:1.8">
  <h1>入力内容の確認</h1>
  <dl>
    <dt>御社名</dt><dd><?=h($in['company'])?></dd>
    <dt>所属</dt><dd><?=h($in['department'])?></dd>
    <dt>氏名</dt><dd><?=h($in['person'])?></dd>
    <dt>A 知名度</dt><dd><?=h($in['A_known'])?></dd>
    <dt>B 知った経路</dt><dd><?=h($in['B_where'])?> / 雑誌: <?=h($in['B_magazine'])?> / その他: <?=h($in['B_other'])?></dd>
    <dt>C 使用状況</dt><dd><?=h($in['C_use'])?></dd>
    <dt>D 他社部品の使用</dt><dd><?=h($in['D_other_vendor_use'])?> / その他: <?=h($in['D_other_text'])?></dd>
    <dt>E 他社メーカー</dt><dd><?=h(array_filter($in['E_vendors'] ?? []))?></dd>
    <dt>E 用途</dt><dd><?=h($in['E_usecase'] ?? [])?> / その他: <?=h($in['E_usecase_other'])?></dd>
    <dt>F 重視点</dt><dd><?=h($in['F_priority'])?> / その他: <?=h($in['F_priority_other'])?></dd>
    <dt>G カスタム電源・インバータ</dt><dd><?=h($in['G_interest'])?> / その他: <?=h($in['G_interest_other'])?></dd>
    <dt>H ノイズフィルタ</dt><dd><?=h($in['H_filter_interest'])?> / その他: <?=h($in['H_filter_other'])?></dd>
    <dt>I サイトの見やすさ</dt><dd><?=h($in['I_site_easy'])?> / その他: <?=h($in['I_site_other'])?></dd>
    <dt>I 掲載希望</dt><dd><?=nl2br(h($in['I_site_suggestion']))?></dd>
    <dt>J ご要望・アドバイス</dt><dd><?=nl2br(h($in['J_advice']))?></dd>
    <dt>メール</dt><dd><?=h($in['email'])?></dd>
  </dl>

  <form action="submit.php" method="post" style="display:inline">
    <?php foreach ($in as $k=>$v): if($k==='website') continue; ?>
      <?php if(is_array($v)): foreach($v as $vv): ?>
        <input type="hidden" name="<?=h($k)?>[]" value="<?=h($vv)?>">
      <?php endforeach; else: ?>
        <input type="hidden" name="<?=h($k)?>" value="<?=h($v)?>">
      <?php endif; ?>
    <?php endforeach; ?>
    <input type="hidden" name="token" value="<?=h($token)?>">
    <button type="submit">はい、送信します</button>
  </form>

  <form action="form.html" method="get" style="display:inline;margin-left:8px">
    <button type="submit">戻って修正</button>
  </form>
</main>

<div id="footer"></div>
<script src="js/common.js"></script>
</body></html>