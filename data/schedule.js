const SCHEDULE = [
  {
    year: "2026",
    month: "3月",
    day: "15",
    tournament: "第3回 BOOSTCUP",
    tournamentId: "2026-boostcup",
    place: "静岡",
    time: null,
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
    ]
  },

  {
    year: "2026",
    month: "5月",
    day: "24",
    tournament: "全日本クラブカップ選手権東京都予選",
    tournamentId: "2026-clc",
    place: "深川スポーツセンター",
    time: "9:00〜",
    resultSummary: null,  // 終了後に記入: "優勝" "ベスト4" など
  },
  {
    year: "2026",
    month: "6月",
    day: "06",
    tournament: "全日本クラブカップ選手権東京都予選",
    tournamentId: "2026-clc",
    place: "荒川スポーツセンター",
    time: "9:00〜",
    resultSummary: null,
  },
  {
    year: "2026",
    month: "6月",
    day: "07",
    tournament: "全日本クラブカップ選手権東京都予選",
    tournamentId: "2026-clc",
    place: "桜美林学園",
    time: "9:00〜",
    resultSummary: null,
  },
  {
    year: "2026",
    month: "6月",
    day: "13",
    tournament: "国民スポーツ大会東京都予選",
    tournamentId: "2026-kokuspo",
    place: "未定",
    time: "9:00〜",
    resultSummary: null,
  },
  {
    year: "2026",
    month: "6月",
    day: "14",
    tournament: "国民スポーツ大会東京都予選",
    tournamentId: "2026-kokuspo",
    place: "未定",
    time: "9:00〜",
    resultSummary: null,
  },
];
