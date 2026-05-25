// config.js - 遊戲基本資料庫
const EMOTION_CARDS = ["焦慮", "悲傷", "委屈", "尷尬", "快樂", "平靜", "勇敢", "興奮"];

const ACTION_CARDS = [
  "分享最近做的一個好決定。(+1分)",
  "對右手邊玩家說一個你欣賞的特質。(+1分)",
  "閉眼深呼吸3次。(+1分)",
  "給未來的自己一句鼓勵話。(+1分)",
  "站起來伸展雙手5秒鐘。(+1分)"
];

const CHALLENGE_CARDS = [
  "抽一張情緒卡，分享近期感到這個情緒的時刻，並描述當下身體的反應。(+3分)",
  "觀察到朋友心情不好時，你會怎麼做？(+3分)",
  "想拒絕他人的要求，但又不想傷害對方，你會怎麼做？(+3分)"
];

const MAP_GRID = [
  { type: "START", label: "起點" },
  { type: "ACTION", label: "行動卡" },
  { type: "ACTION", label: "行動卡" },
  { type: "CHALLENGE", label: "挑戰卡" },
  { type: "SCORE_MINUS", label: "個人扣一分" },
  { type: "ACTION", label: "行動卡" },
  { type: "STOP", label: "冷靜角（暫停一回合）" },
  { type: "ALL_PLUS", label: "玩家全體加一分" },
  { type: "CHALLENGE", label: "挑戰卡" }
];