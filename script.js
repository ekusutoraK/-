const quiz = [
  { q: "ゆはいちゃんねるが初投稿した日はいつ？", a: ["2015年9月5日", "2020年9月5日", "2025年9月5日", "2030年9月5日"], correct: "2020年9月5日" },
  { q: "ゆはいちゃんねるのデュエプレ初投稿動画は何デッキ？", a: ["ダーツフュージョン", "ナーガマーシャルクイーン", "6軸ガチロボ", "黒緑速攻"], correct: "ナーガマーシャルクイーン" },
  { q: "ゆはいちゃんねるが初めてリスナーさんから提供されたデッキはなにデッキ？", a: ["赤単ベーシック", "クローシスボルコン", "メルニアワンショット", "天門"], correct: "メルニアワンショット" },
  { q: "ゆはいちゃんねるが初めて1万再生を超えた動画はなに？", a: ["蟲神器新弾開封", "ブライゼシュート", "緑祝門", "天門ペガサス"], correct: "天門ペガサス" },
  { q: "ゆはいちゃんねるがデュエプレに初めて課金した理由はなに？", a: ["アクアンを4枚作るため", "モテるため", "企画の罰ゲーム", "コラボのスキンのため"], correct: "アクアンを4枚作るため" },
  { q: "ゆはいちゃんねるが紙のデュエマで一番好きなデッキは？", a: ["青黒ハンデス", "ターボゼニス", "10軸ガチロボ", "ランデスサイクリカ"], correct: "ランデスサイクリカ" },
  { q: "ゆはいちゃんねるが最初に（動画で）擦ったクリーチャーはなに？", a: ["ゼリーワーム", "バロスト", "ジャスミン", "グラディアン・レッド・ドラゴン"], correct: "バロスト" },
  { q: "ゆはいちゃんねるが一番撮影に苦労したデッキはなに？", a: ["ハイランダーボルコン", "先行1ターンVANナイン大王", "オブシティアンビートルバロスト", "赤単速攻"], correct: "オブシティアンビートルバロスト" },
  { q: "ゆはいちゃんねるは元々グループYouTuberでしたが何人グループだった？", a: ["そんなグループ存在しない", "5人グループ", "6人グループ", "48人グループ"], correct: "6人グループ" },
  { q: "ゆはいちゃんねるが持ってる資格として正しくないのは？", a: ["保育士資格", "幼稚園免許", "子育て心理カウンセラー", "危険物取扱者"], correct: "危険物取扱者" },
  { q: "ゆはいちゃんねるが彼女に振られた場所は？", a: ["はま寿司", "くら寿司", "かっぱ寿司", "板前寿司"], correct: "はま寿司" },
  { q: "ゆはいちゃんねるが彼女に振られた際に言われた言葉は？", a: ["終わりにしませんか。", "友達に戻りませんか。", "デートに寿司屋は…。", "なかったことにしましょう。"], correct: "友達に戻りませんか。" },
  { q: "ゆはいちゃんねるが失恋して伸びるきっかけになった動画は？", a: ["求愛バジュラ", "失恋ランデス", "失恋バジュラ", "恋愛バジュラ"], correct: "失恋バジュラ" },
  { q: "ゆはいちゃんねる史上一番伸びの悪かった動画はなに？", a: ["グリフォンさん？", "ドングリルは強い！", "ドラフトデュエル", "アラガピユイ"], correct: "アラガピユイ" },
  { q: "ゆはいちゃんねるがデュエプレを始めたのは何弾？", a: ["1弾", "2弾", "4弾", "5弾"], correct: "5弾" },
  { q: "ゆはいちゃんねるが初めて当たったデュエマのレアカードは？", a: ["ボルメテウス・ホワイト・ドラゴン", "アストラル・リーフ", "ミラーフォースドラゴン", "ボルシャック・ドラゴン"], correct: "ミラーフォースドラゴン" },
  { q: "ゆはいちゃんねるが初めて盗まれたムシキングのカードは？", a: ["アクティオンゾウカブト", "ヘラクレスオオカブト", "ミヤマクワガタ", "ノコギリクワガタ"], correct: "アクティオンゾウカブト" },
  { q: "ゆはいちゃんねるは学生時代何部だった？", a: ["吹奏楽部", "サッカー部", "陸上部", "帰宅部"], correct: "サッカー部" },
  { q: "ゆはいちゃんねるが一番好きなアニメは？", a: ["とある科学の超電磁砲", "クレヨンしんちゃん", "シュタインズ・ゲート", "アニメは見ない"], correct: "シュタインズ・ゲート" },
  { q: "ゆはいちゃんねるが初めて課金したソシャゲは？", a: ["モンスト", "原神", "デュエプレ", "パズドラ"], correct: "パズドラ" },
  { q: "ゆはいちゃんねるが初めてライブ配信をした最高同接は何人？", a: ["2人", "20人", "22人", "0人"], correct: "2人" },
  { q: "ゆはいちゃんねるがデュエプレの次に同接を集めたゲームはなに？", a: ["原神", "only up", "パズドラ", "ポケポケ"], correct: "only up" },
  { q: "ゆはいちゃんねるがチャンネル登録者1万人を達成した日は？", a: ["2012年8月22日", "2020年8月22日", "2022年8月22日", "2222年8月22日"], correct: "2022年8月22日" },
  { q: "ゆはいちゃんねるがチャンネル登録者2万人を達成した日は？", a: ["2000年7月6日", "2017年7月6日", "2020年7月6日", "2023年7月6日"], correct: "2023年7月6日" },
  { q: "ゆはいちゃんねるが劇場版ラブライブを映画館でみた回数は？", a: ["0回", "13回", "20回", "35億"], correct: "13回" },
  { q: "ゆはいちゃんねるが好きなサーティワンアイスクリームのフレーバーは？", a: ["大納言あずき", "バニラ", "ポッピングシャワー", "抹茶"], correct: "大納言あずき" },
  { q: "ゆはいちゃんねるが一番嫌いなデュエプレのカードは？", a: ["スナイプ・モスキート", "クサナギ・ブレード", "コッコ・ルピア", "フェアリー・ライフ"], correct: "クサナギ・ブレード" },
  { q: "ゆはいちゃんねるが好きな乃木坂46の楽曲のタイトルはなに？", a: ["シンクロニシティ", "サヨナラの意味", "君に叱られた", "インフルエンサー"], correct: "君に叱られた" },
  { q: "ゆはいちゃんねるが学生時代にしてたアルバイトはなに？", a: ["家庭教師", "新聞配達", "コンビニ", "寿司屋"], correct: "寿司屋" },
  { q: "ゆはいちゃんねるがすき家で一番頼む牛丼はなに？", a: ["チーズ牛丼", "牛丼（並）", "牛丼（つゆだく）", "牛丼（大盛り）"], correct: "チーズ牛丼" },
  { q: "ゆはいちゃんねるが東京ディズニーシーで一番好きなアトラクションはなに？", a: ["タートル・トーク", "ソアリンファンタスティックフライト", "タワー・オブ・テラー", "海底2万マイル"], correct: "ソアリンファンタスティックフライト" },
  { q: "ゆはいちゃんねるが初めてお店に買取を出したカードはなに？", a: ["超竜バジュラ", "ボルシャック・ドラゴン", "魔刻の斬将オルゼキア", "買取に出したことはない"], correct: "魔刻の斬将オルゼキア" },
  { q: "ゆはいちゃんねるが一番好きなドラクエのナンバリングはなに？", a: ["ドラゴンクエスト3", "ドラゴンクエスト5", "ドラゴンクエスト8", "ドラゴンクエスト10"], correct: "ドラゴンクエスト8" },
  { q: "ゆはいちゃんねるの推しの子の推しは誰？", a: ["ぴえヨン", "斉藤ミヤコ", "黒川あかね", "有馬かな"], correct: "有馬かな" },
  { q: "ゆはいちゃんねるのちいかわの推しは誰？", a: ["くりまんじゅう", "モモンガ", "ハチワレ", "ラッコ"], correct: "くりまんじゅう" },
  { q: "ゆはいちゃんねるが学生時代に書いた絵本のタイトルはなに？", a: ["湯原俊哉の冒険", "バナニンティウス物語", "友達に戻りませんか", "絵本を作ったことがない"], correct: "バナニンティウス物語" },
  { q: "ゆはいちゃんねるが一番好きな寿司のネタは？", a: ["わさびなす", "いくら", "えんがわ", "まぐろ"], correct: "えんがわ" },
  { q: "ゆはいちゃんねるが焼肉で絶対に頼むものは？", a: ["コーラ", "タン", "キャベツ", "ソーセージ"], correct: "ソーセージ" },
  { q: "ゆはいちゃんねるの好きなポケモンは？", a: ["ミミッキュ", "ピカチュウ", "ライチュウ", "ピチュー"], correct: "ミミッキュ" }
];

let currentIndex = 0;
let score = 0;
let questions = [];

const questionElem = document.getElementById("question");
const choicesElem = document.getElementById("choices");
const nextBtn = document.getElementById("next-btn");
const feedback = document.createElement("div");
feedback.id = "feedback";
document.querySelector(".quiz-container").appendChild(feedback);

function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function startQuiz() {
  questions = shuffleArray([...allQuestions]).slice(0, 7);
  currentIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  const current = questions[currentIndex];
  questionElem.textContent = current.q;
  choicesElem.innerHTML = "";

  const shuffledChoices = shuffleArray([...current.c]);
  shuffledChoices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(choice);
    choicesElem.appendChild(btn);
  });

  nextBtn.classList.add("hidden");
  feedback.textContent = "";
}

function selectAnswer(choice) {
  const current = questions[currentIndex];
  const buttons = document.querySelectorAll("#choices button");

  buttons.forEach(btn => btn.disabled = true);

  if (choice === current.a) {
    score++;
    feedback.textContent = "✅ 正解！";
    feedback.style.color = "#00FF88";
  } else {
    feedback.textContent = `❌ 不正解！ 正解は「${current.a}」`;
    feedback.style.color = "#FF5555";
  }

  nextBtn.classList.remove("hidden");
}

nextBtn.onclick = () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  questionElem.textContent = `お疲れ様！あなたの得点は ${score} / ${questions.length} 点です！`;
  choicesElem.innerHTML = "";
  feedback.textContent = "";
  nextBtn.textContent = "もう一度遊ぶ";
  nextBtn.onclick = () => {
    nextBtn.textContent = "次へ";
    startQuiz();
  };
}

startQuiz();
