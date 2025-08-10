/* development-experience.html の表をカード用データに整理 */
const DEV_EXPERIENCE = [
  {
    name: "リチウムバッテリ用 パワーコンディショナ",
    category: "パワコン",
    image: "https://www.pony-e.jp/pcs_with_lib.jpg",
    pdf: "https://pony-e.jp/pcs_with_lib.pdf",
    tags: ["HEMS", "単相AC200V", "5kW", "JET準拠レベル", "RS485"],
    description:
      "HEMS向けリチウムバッテリ用パワコン。単相AC200V/5kW、JET認証準拠レベル。RS485通信で制御可能。"
  },
  {
    name: "V2H用 パワーコンディショナ（EV↔HOME）",
    category: "V2H/パワコン",
    image: "https://www.pony-e.jp/pcs.jpg",
    pdf: "https://pony-e.jp/pcs.pdf",
    tags: ["V2H", "CHAdeMO対応", "単相AC200V", "3kW", "独立運転", "系統連系", "JET準拠レベル", "RS485"],
    description:
      "EVの充電（CHAdeMO）およびEV→家庭への系統連系運転に対応。災害時の独立運転も可能。単相AC200V/3kW、RS485通信対応。"
  },
  {
    name: "DABコンバータ（双方向コンバータ）",
    category: "DC-DC",
    image: "https://www.pony-e.jp/K1725.jpg",
    pdf: "https://pony-e.jp/K1725.pdf",
    tags: ["DAB", "双方向", "SiC", "RS485"],
    description:
      "双方向電源用途に適したDABコンバータ。SiC採用、RS485通信で制御可能。"
  },
  {
    name: "150kVA SRモーター用インバータ（開発中）",
    category: "インバータ",
    image: "https://www.pony-e.jp/K1738.jpg",
    pdf: "https://pony-e.jp/K1738.pdf",
    tags: ["150kVA", "SRモータ", "IGBT", "水冷", "防水ケース", "光ゲート信号", "保護回路"],
    description:
      "IGBTモジュール採用・水冷冷却。防水ケース提案可。光ゲート入力、電流/電圧保護を実装。制御コントローラ準備可能。"
  }
];