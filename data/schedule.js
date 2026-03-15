const SCHEDULE = [
  // ---- 今後の試合 ----
  {
    type: "upcoming",        // "upcoming" | "result"
    year: "2026",
    month: "5月",
    day: "24",
    tournament: "全日本クラブカップ選手権東京都予選 1日目",
    place: "深川スポーツセンター",
    time: "9:00〜",
    score: null,             // 結果なし
    result: null,            // "win" | "lose" | null
  },
  {
    type: "upcoming",
    year: "2026",
    month: "6月",
    day: "06",
    tournament: "全日本クラブカップ選手権東京都予選 2日目",
    place: "荒川スポーツセンター",
    time: "9:00〜",
    score: null,
    result: null,
  },

  // ---- 試合結果 ----
  {
    type: "result",
    year: "2026",
    month: "3月",
    day: "14",
    tournament: "XXXXXX",
    place: "東京体育館",
    time: null,
    score: { us: 3, them: 1 },
    result: "win",
  },
  {
    type: "result",
    year: "2026",
    month: "3月",
    day: "07",
    tournament: "XXXXXX",
    place: "東京体育館",
    time: null,
    score: { us: 3, them: 0 },
    result: "win",
  },
  {
    type: "result",
    year: "2026",
    month: "2月",
    day: "28",
    tournament: "XXXXXX",
    place: "東京体育館",
    time: null,
    score: { us: 1, them: 3 },
    result: "lose",
  },
  {
    type: "result",
    year: "2026",
    month: "2月",
    day: "22",
    tournament: "練習試合",
    place: "東京体育館",
    time: null,
    score: { us: 3, them: 0 },
    result: "win",
  },
];
