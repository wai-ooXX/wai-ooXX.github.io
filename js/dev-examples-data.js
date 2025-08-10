/* 開発事例（development-examples.html の元コンテンツを整理） */
const DEV_EXAMPLES = [
  {
    name: "三相交流スイッチングフィルタ",
    category: "フィルタ",
    image: "https://www.pony-e.jp/PE-Doc/3PHI-ACswitchingFilter.png",
    pdf: "https://www.pony-e.jp/PE-Doc/3PHI-ACswitchingFilter.pdf",
    tags: ["三相", "LCL", "PWMインバータ", "正弦波", "系統連系"],
    description:
      "三相PWMインバータ向けの三相LCLフィルタ。正弦波インバータや系統連系用途などカスタム対応可能。"
  },
  {
    name: "双方向電流共振型絶縁DCDCコンバータ",
    category: "DC-DC",
    image: "https://www.pony-e.jp/image/双方向電流共振型絶縁DCDCコンバータ.jpg",
    pdf: "https://www.pony-e.jp/image/双方向電流共振型絶縁DCDCコンバータ.pdf",
    tags: ["双方向", "絶縁", "高効率"],
    description:
      "高効率の絶縁DC-DCコンバータ。電力変換器の絶縁化に最適。仕様に応じたカスタマイズ対応。"
  },
  {
    name: "非接触給電向け高周波インバータ（開発中）",
    category: "インバータ",
    image: "https://www.pony-e.jp/image/SIP_高周波インバータ.jpg",
    pdf: "https://www.pony-e.jp/SIP_高周波インバータ.pdf",
    tags: ["高周波", "無線電力", "開発中"],
    description:
      "最新部品・文献技術も取り入れた非接触給電向けの高周波インバータ。"
  },
  {
    name: "ソフトスイッチングインターリーブ 双方向DC-DCコンバータ",
    category: "DC-DC",
    image: "https://www.pony-e.jp/image/ソフトスイッチング.png",
    pdf: "https://www.pony-e.jp/ソフトスイッチングイン.pdf",
    tags: ["ソフトスイッチング", "インターリーブ", "高効率"],
    description:
      "インターリーブ＋ソフトスイッチングで損失低減。双方向DC-DCとして高効率化を実現。"
  },
  {
    name: "太陽光発電向けマイクロインバータ",
    category: "インバータ",
    image: "https://www.pony-e.jp/image/マイクロインバータ.jpg",
    pdf: "https://www.pony-e.jp/マイクロインバータ.pdf",
    tags: ["太陽光", "系統連系", "小型"],
    description:
      "ご要望に合わせた設計～試作～実証試験まで一貫対応。太陽光用の小型マイクロインバータ。"
  },
  {
    name: "研究開発品の実証試験",
    category: "実証・監視",
    image: "https://www.pony-e.jp/image/PV監視写真.jpg",
    pdf: "https://www.pony-e.jp/PV監視.pdf",
    tags: ["遠隔監視", "データ集計", "デバッグ"],
    description:
      "装置データをオンライン遠隔監視。試作品のデバッグや実証実験のデータ収集・集計に活用可能。"
  },
  {
    name: "ポニー電機製品のセット提供",
    category: "ソリューション",
    image: "https://www.pony-e.jp/image/set.png",
    pdf: "https://www.pony-e.jp/set sale.pdf",
    tags: ["制御基板", "トランス/リアクトル", "セット提供"],
    description:
      "“制御ソフト入り制御基板”＋“トランス/リアクトル”をセット提供。開発～導入を素早く。"
  },
  {
    name: "電力回生負荷",
    category: "回生/負荷",
    image: "https://www.pony-e.jp/image/Regenerative.png",
    pdf: "https://www.pony-e.jp/Regenerative Load.pdf",
    tags: ["回生", "省エネ", "三相"],
    description:
      "抵抗負荷の消費を三相回生へ置き換え。省エネ・効率化に有効。"
  }
];