<?php
session_start();
function flat($v){ return is_array($v) ? implode('; ', array_filter($v)) : (string)($v ?? ''); }
function esc_csv($s){ return str_replace(["\r","\n"], ['\\r','\\n'], $s ?? ''); }

if (empty($_POST['token']) || empty($_SESSION['token']) || !hash_equals($_SESSION['token'], $_POST['token'])) {
  http_response_code(400); exit('Invalid token');
}
unset($_SESSION['token']);

// 受取（自由に増減OK）
$keys = [
  'company','department','person','A_known','B_where','B_magazine','B_other',
  'C_use','D_other_vendor_use','D_other_text','E_vendors','E_usecase','E_usecase_other',
  'F_priority','F_priority_other','G_interest','G_interest_other','H_filter_interest','H_filter_other',
  'I_site_easy','I_site_other','I_site_suggestion','J_advice','email'
];
$in = [];
foreach($keys as $k){
  $in[$k] = $_POST[$k] ?? (strpos($k,'[]')!==false ? [] : '');
}

// ====== メール送信 ======
mb_language("Japanese"); mb_internal_encoding("UTF-8");
$to   = 'office@pony-e.jp';               // 送信先
$subj = '【WEBアンケート】新規回答';
$body =
"WEBアンケート回答\n\n".
"日時: ".date('Y-m-d H:i:s')."\n".
"御社名: ".flat($in['company'])."\n".
"所属: ".flat($in['department'])."\n".
"氏名: ".flat($in['person'])."\n".
"A: ".flat($in['A_known'])."\n".
"B: ".flat($in['B_where'])." / 雑誌: ".flat($in['B_magazine'])." / その他: ".flat($in['B_other'])."\n".
"C: ".flat($in['C_use'])."\n".
"D: ".flat($in['D_other_vendor_use'])." / その他: ".flat($in['D_other_text'])."\n".
"E(他社メーカ): ".flat($in['E_vendors'])."\n".
"E(用途): ".flat($in['E_usecase'])." / その他: ".flat($in['E_usecase_other'])."\n".
"F: ".flat($in['F_priority'])." / その他: ".flat($in['F_priority_other'])."\n".
"G: ".flat($in['G_interest'])." / その他: ".flat($in['G_interest_other'])."\n".
"H: ".flat($in['H_filter_interest'])." / その他: ".flat($in['H_filter_other'])."\n".
"I(見やすさ): ".flat($in['I_site_easy'])." / その他: ".flat($in['I_site_other'])."\n".
"I(掲載希望): ".flat($in['I_site_suggestion'])."\n".
"J(ご要望): ".flat($in['J_advice'])."\n".
"メール: ".flat($in['email'])."\n".
"IP: ".($_SERVER['REMOTE_ADDR'] ?? '')."\n";

$headers = "From: no-reply@your-domain.example\n";
@mb_send_mail($to, $subj, $body, $headers);

// ====== CSV保存 ======
$csvDir  = __DIR__.'/secure/data';
$csvFile = $csvDir.'/responses.csv';
if (!is_dir($csvDir)) { mkdir($csvDir, 0775, true); }
if ($fp = fopen($csvFile, 'ab')) {
  $row = [
    date('Y-m-d H:i:s'),
    flat($in['company']),
    flat($in['department']),
    flat($in['person']),
    flat($in['A_known']),
    flat($in['B_where']),
    flat($in['B_magazine']),
    flat($in['B_other']),
    flat($in['C_use']),
    flat($in['D_other_vendor_use']),
    flat($in['D_other_text']),
    flat($in['E_vendors']),
    flat($in['E_usecase']),
    flat($in['E_usecase_other']),
    flat($in['F_priority']),
    flat($in['F_priority_other']),
    flat($in['G_interest']),
    flat($in['G_interest_other']),
    flat($in['H_filter_interest']),
    flat($in['H_filter_other']),
    flat($in['I_site_easy']),
    flat($in['I_site_other']),
    esc_csv($in['I_site_suggestion']),
    esc_csv($in['J_advice']),
    flat($in['email']),
    ($_SERVER['REMOTE_ADDR'] ?? '')
  ];
  fputcsv($fp, $row);
  fclose($fp);
}

header('Location: thanks.html'); exit;