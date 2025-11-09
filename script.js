const quiz = [
  {
    question: "日本の首都は？",
    choices: ["大阪", "東京", "名古屋", "札幌"],
    answer: "東京"
  },
  {
    question: "富士山の標高は？",
    choices: ["2776m", "3776m", "4776m", "5776m"],
    answer: "3776m"
  },
  {
    question: "りんごは英語で？",
    choices: ["Banana", "Grape", "Apple", "Melon"],
    answer: "Apple"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("next-btn");

function showQuestion() {
  const q = quiz[currentQuestion];
  questionEl.textContent = q.question;
  choicesEl.innerHTML = "";

  q.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.onclick = () => checkAnswer(btn, choice);
    choicesEl.appendChild(btn);
  });
}

function checkAnswer(button, choice) {
  const correct = quiz[currentQuestion].answer;
  const buttons = choicesEl.querySelectorAll("button");

  // すべてのボタンを一時的に無効化
  buttons.forEach(btn => btn.disabled = true);

  if (choice === correct) {
    button.style.backgroundColor = "#4CAF50"; // 緑
    questionEl.textContent = "✅ 正解！";
    score++;
  } else {
    button.style.backgroundColor = "#f44336"; // 赤
    questionEl.textContent = `❌ 不正解！ 正解は「${correct}」`;
  }

  nextBtn.classList.remove("hidden");
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < quiz.length) {
    showQuestion();
    nextBtn.classList.add("hidden");
  } else {
    showResult();
  }
};

function showResult() {
  questionEl.textContent = `🎉 終了！あなたの得点は ${score} / ${quiz.length} 点です`;
  choicesEl.innerHTML = "";
  nextBtn.textContent = "もう一度";
  nextBtn.onclick = restartQuiz;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  nextBtn.textContent = "次へ";
  showQuestion();
  nextBtn.classList.add("hidden");
}

// 最初の問題を表示
showQuestion();
