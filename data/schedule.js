const SCHEDULE = [
  // ---- 試合結果 ----
  {
    tournament: "第3回 BOOSTCUP",
    tournamentId: "2026-boostcup",
    days: [
      { year: "2026", month: "3月", day: "15", place: "静岡", time: null },
    ],
    teams: [
      {
        name: "SUISEN",
        summary: "下位トーナメント優勝",
        result: "win",
        rounds: [
          {
            round: "予選",
            matches: [
              { opponent: "金沢教員クラブ", score: "0-2", result: "lose" },
              { opponent: "総政会",         score: "2-0", result: "win"  },
            ]
          },
          {
            round: "下位トーナメント",
            matches: [
              { opponent: "BREZZA", score: "2-0", result: "win" },
              { opponent: "総政会", score: "2-1", result: "win" },
              { opponent: "TAYCA",  score: "2-0", result: "win" },
            ]
          },
        ]
      },
      {
        name: "SUISUISUISEN",
        summary: "下位トーナメント1回戦敗退",
        result: "lose",
        rounds: [
          {
            round: "予選",
            matches: [
              { opponent: "entrance", score: "0-2", result: "lose" },
              { opponent: "MAX",      score: "1-2", result: "lose" },
            ]
          },
          {
            round: "下位トーナメント",
            matches: [
              { opponent: "TAYCA", score: "0-2", result: "lose" },
            ]
          },
        ]
      },
    ],
    resultSummary: null,
  },

  // ---- 今後の試合 ----
  {
    tournament: "全日本クラブカップ選手権東京都予選",
    tournamentId: "2026-clc",
    days: [
      { year: "2026", month: "5月", day: "24", place: "深川スポーツセンター", time: "9:00〜" },
      { year: "2026", month: "6月", day: "06", place: "荒川スポーツセンター", time: "9:00〜" },
      { year: "2026", month: "6月", day: "07", place: "桜美林学園",           time: "9:00〜" },
    ],
    teams: null,
    resultSummary: null,
  },
  {
    tournament: "国民スポーツ大会東京都予選",
    tournamentId: "2026-kokuspo",
    days: [
      { year: "2026", month: "6月", day: "13", place: "未定", time: "9:00〜" },
      { year: "2026", month: "6月", day: "14", place: "未定", time: "9:00〜" },
    ],
    teams: null,
    resultSummary: null,
  },
];
