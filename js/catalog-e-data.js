/* catalog-e-products 用データ */
const E_PRODUCTS = [
  {
    name: "4CHゲートドライバ",
    code: "PC008-112C",
    category: "ドライバ",
    pdf: "https://pony-e.jp/GateDrive_PC008-112C.pdf",
    image: "https://www.pony-e.jp/GateDrive_PC008-112A.jpg",
    note: "―",
    tags: ["IGBT", "最大600A", "25kHz", "絶縁電源内蔵"],
    description:
      "IGBTなどのゲートドライバ。1200V/600A程度まで対応、25kHzまで使用可能。絶縁電源内蔵でDC24V単独駆動。"
  },
  {
    name: "単相EMIフィルタ",
    code: "PC010-122",
    category: "フィルタ",
    pdf: "https://pony-e.jp/EMIfilter_PC010-122.pdf",
    image: "https://www.pony-e.jp/EMIfilter_PC010-122.jpg",
    note: "―",
    tags: ["ファインメット", "高周波特性", "DC800V対応", "バリスタ910V"],
    description:
      "ファインメットコイル構成で高周波特性に優れるDC800V対応EMIフィルタ。高耐圧バリスタ採用。"
  },
  {
    name: "系統連系形直流電源（1モード）",
    code: "PA014-114",
    category: "直流電源",
    pdf: "https://pony-e.jp/10kw_PowerSource.pdf",
    image: "https://www.pony-e.jp/10kw_PowerSource.jpg",
    note: "―",
    tags: ["0–350V可変", "回生対応", "系統連系"],
    description:
      "系統連系インバータ内蔵の直流電源。0～350V可変。モータ回生などのエネルギを系統へ回生可能。"
  },
  {
    name: "双方向パワーコンディショナ（3モード）",
    code: "PA014-114",
    category: "パワコン",
    pdf: "https://pony-e.jp/10kw_bidirectional_PCS-2.pdf",
    image: "https://www.pony-e.jp/10kw_bidirectional_PCS.jpg",
    note: "―",
    tags: ["充放電", "逆潮流", "独立運転", "並列運転可", "冗長運転"],
    description:
      "バッテリDC0～420Vと系統連系3φAC200V対応。充電/放電/独立の3モード。スタンドアローン並列で冗長化。"
  },
  {
    name: "パワエレスカウター（開発環境）",
    code: "PA016-118",
    category: "開発ツール",
    pdf: "https://pony-e.jp/PEskauter.pdf",
    image: "https://www.pony-e.jp/PEskauter.jpg",
    note: "―",
    tags: ["デバッグ", "開発支援"],
    description:
      "パワエレ装置のマイコン内部状態を可視化し、開発効率を高めるツール。"
  },
  {
    name: "10kW 双方向DC-DCコンバータ（絶縁）",
    code: "PC016-120",
    category: "DC-DC",
    pdf: "https://pony-e.jp/10kW_isolated_ddc_ver1.0.pdf",
    image: "https://www.pony-e.jp/BIDCDC103.jpg",
    note: "―",
    tags: ["双方向", "絶縁", "200–400V↔360V", "並列可"],
    description:
      "DC200～400VとDC360Vを絶縁接続。充電・放電の双方向。太陽光接続や電力平準化にも活用可能。"
  },
  {
    name: "DC800V→24V 多出力電源",
    code: "PA016-118",
    category: "補助電源",
    pdf: "https://pony-e.jp/DC800Vto24Vver1.0.pdf",
    image: "https://www.pony-e.jp/DC800VDC24V50W.jpg",
    note: "―",
    tags: ["高耐圧", "補助電源", "インバータ/パワコン内部"],
    description:
      "高圧(DC800V)系から補助電源(24V)を生成。モータインバータ回生部やパワコン内部などに最適。"
  },
  {
    name: "小型風力出力安定装置（太陽光パワコン利用）",
    code: "PA018-???",
    category: "風力関連",
    pdf: "https://pony-e.jp/WindSystem.pdf",
    image: "https://www.pony-e.jp/WindSystem.jpg",
    note: "―",
    tags: ["MPPT", "高電圧対応", "12kW", "太陽光パワコン活用"],
    description:
      "風車MPPTと高電圧対応を行い、太陽電池特性を出力。既存の太陽光用パワコンを活用可能。"
  },
  {
    name: "三相回生コンバータ（力率改善回路）",
    code: "PA018-???",
    category: "回生・PFC",
    pdf: "https://pony-e.jp/KaiseiConvertor_ver1.1.pdf",
    image: "https://www.pony-e.jp/KaiseiConvertor.jpg",
    note: "―",
    tags: ["2–12kW", "PFC", "並列可"],
    description:
      "ワイヤレス給電やモータ回生の電力処理に。PFCとしてシステム構成も可能。2～50kWまでカスタム対応。"
  },
  {
    name: "カスタム用制御基板",
    code: "PC008-119B",
    category: "制御基板",
    pdf: "https://pony-e.jp/PC008-119A.pdf",
    image: "https://www.pony-e.jp/PC008-119Aa.jpg",
    note: "カスタム受託設計に最適",
    tags: ["パワエレ制御", "ソフト書込納入可"],
    description:
      "DC-DCやマトリックスコンバータ等に対応する制御基板。カスタム開発後の量産移行にも有用。"
  },
  {
    name: "量産用制御基板",
    code: "PC015_146B",
    category: "制御基板",
    pdf: "https://pony-e.jp/PC015_146B.pdf",
    image: "https://www.pony-e.jp/PC015_146Bb.jpg",
    note: "量産化に最適",
    tags: ["HW保護内蔵", "ソフト調整", "量産対応"],
    description:
      "スイッチング異常検知のHW保護を内蔵。多くの受託後量産で採用。ソフト書込済み納入可。"
  },
  {
    name: "低圧電源 12V 1kW（空冷）",
    code: "PA017-???",
    category: "直流電源",
    pdf: "https://pony-e.jp/SPY12V1kW.pdf",
    image: "https://www.pony-e.jp/SPY12V1kW.jpg",
    note: "―",
    tags: ["12V/1kW", "CAN/RS485", "並列可"],
    description:
      "12V系バッテリ充電等に。通信(CAN/RS485)や並列運転にも対応。"
  },
  {
    name: "バッテリ充放電装置",
    code: "PA019-111A",
    category: "充放電装置",
    pdf: "https://pony-e.jp/Nezko15k.pdf",
    image: "https://www.pony-e.jp/Nezko15k.jpg",
    note: "―",
    tags: ["DC200–400V", "DC360V", "並列可", "小型"],
    description:
      "DC200～400VとDC360V間で電力をやり取り。通信で充電/放電切替、インターリーブで小型、並列可。"
  }
];