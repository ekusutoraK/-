const questionsData = [
  {
    question: "ゆはいちゃんねるが初投稿した日はいつ？",
    choices: ["2015年9月5日","2020年9月5日","2025年9月5日","2030年9月5日"],
    answer: "2020年9月5日"
  },
  {
    question: "ゆはいちゃんねるのデュエプレ初投稿動画は何デッキ？",
    choices: ["ダーツフュージョン","ナーガマーシャルクイーン","6軸ガチロボ","黒緑速攻"],
    answer: "ナーガマーシャルクイーン"
  },
  {
    question: "ゆはいちゃんねるが初めてリスナーさんから提供されたデッキはなにデッキ？",
    choices: ["赤単ベーシック","クローシスボルコン","メルニアワンショット","天門"],
    answer: "メルニアワンショット"
  },
  {
    question: "ゆはいちゃんねるが初めて1万再生を超えた動画はなに？",
    choices: ["蟲神器新弾開封","ブライゼシュート","緑祝門","天門ペガサス"],
    answer: "天門ペガサス"
  },
  {
    question: "ゆはいちゃんねるがデュエプレに初めて課金した理由はなに？",
    choices: ["アクアンを4枚作るため","モテるため","企画の罰ゲーム","コラボのスキンのため"],
    answer: "アクアンを4枚作るため"
  },
  {
    question: "ゆはいちゃんねるが紙のデュエマで一番好きなデッキは？",
    choices: ["青黒ハンデス","ターボゼニス","10軸ガチロボ","ランデスサイクリカ"],
    answer: "ランデスサイクリカ"
  },
  {
    question: "ゆはいちゃんねるが最初に（動画で）擦ったクリーチャーはなに？",
    choices: ["ゼリーワーム","バロスト","ジャスミン","グラディアン・レッド・ドラゴン"],
    answer: "バロスト"
  },
  {
    question: "ゆはいちゃんねるが一番撮影に苦労したデッキはなに？",
    choices: ["ハイランダーボルコン","先行1ターンVANナイン大王","オブシティアンビートルバロスト","赤単速攻"],
    answer: "オブシティアンビートルバロスト"
  },
  {
    question: "ゆはいちゃんねるは元々グループYouTuberでしたが何人グループだった？",
    choices: ["そんなグループ存在しない","5人グループ","6人グループ","48人グループ"],
    answer: "6人グループ"
  },
  {
    question: "ゆはいちゃんねるが持ってる資格として正しくないのは？",
    choices: ["保育士資格","幼稚園免許","子育て心理カウンセラー","危険物取扱者"],
    answer: "危険物取扱者"
  },
  {
    question: "ゆはいちゃんねるが彼女に振られた場所は？",
    choices: ["はま寿司","くら寿司","かっぱ寿司","板前寿司"],
    answer: "はま寿司"
  },
  {
    question: "ゆはいちゃんねるが彼女に振られた際に言われた言葉は？",
    choices: ["終わりにしませんか。","友達に戻りませんか。","デートに寿司屋は…。","なかったことにしましょう。"],
    answer: "友達に戻りませんか。"
  },
  {
    question: "ゆはいちゃんねるが失恋して伸びるきっかけになった動画は？",
    choices: ["求愛バジュラ","失恋ランデス","失恋バジュラ","恋愛バジュラ"],
    answer: "失恋バジュラ"
  },
  {
    question: "ゆはいちゃんねる史上一番伸びの悪かった動画はなに？",
    choices: ["グリフォンさん？","ドングリルは強い！","ドラフトデュエル","アラガピユイ"],
    answer: "アラガピユイ"
  },
  {
    question: "ゆはいちゃんねるがデュエプレを始めたのは何弾？",
    choices: ["1弾","2弾","4弾","5弾"],
    answer: "5弾"
  },
  {
    question: "ゆはいちゃんねるが初めて当たったデュエマのレアカードは？",
    choices: ["ボルメテウス・ホワイト・ドラゴン","アストラル・リーフ","ミラーフォースドラゴン","ボルシャック・ドラゴン"],
    answer: "ミラーフォースドラゴン"
  },
  {
    question: "ゆはいちゃんねるが初めて盗まれたムシキングのカードは？",
    choices: ["アクティオンゾウカブト","ヘラクレスオオカブト","ミヤマクワガタ","ノコギリクワガタ"],
    answer: "アクティオンゾウカブト"
  },
  {
    question: "ゆはいちゃんねるは学生時代何部だった？",
    choices: ["吹奏楽部","サッカー部","陸上部","帰宅部"],
    answer: "サッカー部"
  },
  {
    question: "ゆはいちゃんねるが一番好きなアニメは？",
    choices: ["とある科学の超電磁砲","クレヨンしんちゃん","シュタインズ・ゲート","アニメは見ない"],
    answer: "シュタインズ・ゲート"
  },
  {
    question: "ゆはいちゃんねるが初めて課金したソシャゲは？",
    choices: ["モンスト","原神","デュエプレ","パズドラ"],
    answer: "パズドラ"
  },
  {
    question: "ゆはいちゃんねるが初めてライブ配信をした最高同接は何人？",
    choices: ["2人","20人","22人","0人"],
    answer: "2人"
  },
  {
    question: "ゆはいちゃんねるがデュエプレの次に同接を集めたゲームはなに？",
    choices: ["原神","only up","パズドラ","ポケポケ"],
    answer: "only up"
  },
  {
    question: "ゆはいちゃんねるがチャンネル登録者1万人を達成した日は？",
    choices: ["2012年8月22日","2020年8月22日","2022年8月22日","2222年8月22日"],
    answer: "2022年8月22日"
  },
  {
    question: "ゆはいちゃんねるがチャンネル登録者2万人を達成した日は？",
    choices: ["2000年7月6日","2017年7月6日","2020年7月6日","2023年7月6日"],
    answer: "2023年7月6日"
  },
  {
    question: "ゆはいちゃんねるが劇場版ラブライブを映画館でみた回数は？",
    choices: ["0回","13回","20回","35億"],
    answer: "13回"
  },
  {
    question: "ゆはいちゃんねるが好きなサーティワンアイスクリームのフレーバーは？",
    choices: ["大納言あずき","バニラ","ポッピングシャワー","抹茶"],
    answer: "大納言あずき"
  },
  {
    question: "ゆはいちゃんねるが一番嫌いなデュエプレのカードは？",
    choices: ["スナイプ・モスキート","クサナギ・ブレード","コッコ・ルピア","フェアリー・ライフ"],
    answer: "クサナギ・ブレード"
  },
  {
    question: "ゆはいちゃんねるが好きな乃木坂46の楽曲のタイトルはなに？",
    choices: ["シンクロニシティ","サヨナラの意味","君に叱られた","インフルエンサー"],
    answer: "君に叱られた"
  },
  {
    question: "ゆはいちゃんねるが学生時代にしてたアルバイトはなに？",
    choices: ["家庭教師","新聞配達","コンビニ","寿司屋"],
    answer: "寿司屋"
  },
  {
    question: "ゆはいちゃんねるがすき家で一番頼む牛丼はなに？",
    choices: ["チーズ牛丼","牛丼（並）","牛丼（つゆだく）","牛丼（大盛り）"],
    answer: "チーズ牛丼"
  },
  {
    question: "ゆはいちゃんねるが東京ディズニーシーで一番好きなアトラクションはなに？",
    choices: ["タートル・トーク","ソアリンファンタスティックフライト","タワー・オブ・テラー","海底2万マイル"],
    answer: "ソアリンファンタスティックフライト"
  },
  {
    question: "ゆはいちゃんねるが初めてお店に買取を出したカードはなに？",
    choices: ["超竜バジュラ","ボルシャック・ドラゴン","魔刻の斬将オルゼキア","買取に出したことはない"],
    answer: "魔刻の斬将オルゼキア"
  },
  {
    question: "ゆはいちゃんねるが一番好きなドラクエのナンバリングはなに？",
    choices: ["ドラゴンクエスト3","ドラゴンクエスト5","ドラゴンクエスト8","ドラゴンクエスト10"],
    answer: "ドラゴンクエスト8"
  },
  {
    question: "ゆはいちゃんねるの推しの子の推しは誰？",
    choices: ["ぴえヨン","斉藤ミヤコ","黒川あかね","有馬かな"],
    answer: "有馬かな"
  },
  {
    question: "ゆはいちゃんねるのちいかわの推しは誰？",
    choices: ["くりまんじゅう","モモンガ","ハチワレ","ラッコ"],
    answer: "くりまんじゅう"
  },
  {
    question: "ゆはいちゃんねるが学生時代に書いた絵本のタイトルはなに？",
    choices: ["湯原俊哉の冒険","バナニンティウス物語","友達に戻りませんか","絵本を作ったことがない"],
    answer: "バナニンティウス物語"
  },
  {
    question: "ゆはいちゃんねるが一番好きな寿司のネタは？",
    choices: ["わさびなす","いくら","えんがわ","まぐろ"],
    answer: "えんがわ"
  },
  {
    question: "ゆはいちゃんねるが焼肉で絶対に頼むものは？",
    choices: ["コーラ","タン","キャベツ","ソーセージ"],
    answer: "ソーセージ"
  },
  {
    question: "ゆはいちゃんねるの好きなポケモンは？",
    choices: ["ミミッキュ","ピカチュウ","ライチュウ","ピチュー"],
    answer: "ミミッキュ"
  }
];

// ---------- 以下は前回の完全版スクリプト ----------
let questionsPool = [...questionsData];
let selectedQuestions = [];
while (selectedQuestions.length < 7 && questionsPool.length > 0) {
  const idx = Math.floor(Math.random() * questionsPool.length);
  selectedQuestions.push(questionsPool.splice(idx,1)[0]);
}

let currentQuestion = 0;
let selectedAnswer = null;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("next-btn");

function showQuestion() {
  choicesEl.innerHTML = "";
  selectedAnswer = null;
  const q = selectedQuestions[currentQuestion];
  questionEl.textContent = q.question;

  // 選択肢ランダム化
  const shuffledChoices = [...q.choices].sort(() => Math.random()-0.5);
  shuffledChoices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.addEventListener("click", ()=> selectAnswer(choice));
    choicesEl.appendChild(btn);
  });

  nextBtn.textContent = "回答";
  nextBtn.classList.remove("hidden");
}

function selectAnswer(choice) {
  selectedAnswer = choice;
  Array.from(choicesEl.children).forEach(btn => btn.disabled = true);
}

nextBtn.addEventListener("click", ()=>{
  if(!selectedAnswer){
    alert("選択肢を選んでください！");
    return;
  }

  const q = selectedQuestions[currentQuestion];
  questionEl.textContent = `あなたの答え: ${selectedAnswer}\n正解: ${q.answer}\n${selectedAnswer===q.answer ? "正解！" : "不正解…"}`;
  choicesEl.innerHTML = "";
  nextBtn.textContent = "次の問題へ";

  nextBtn.onclick = ()=>{
    currentQuestion++;
    if(currentQuestion < selectedQuestions.length){
      showQuestion();
      nextBtn.onclick = null;
    } else {
      questionEl.textContent = "クイズ終了！お疲れ様でした！";
      choicesEl.innerHTML = "";
      nextBtn.classList.add("hidden");
    }
  };
});

showQuestion();
