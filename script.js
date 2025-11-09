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
const popup = document.getElementById("popup");

function showQuestion() {
  const q = quiz[currentQuestion];
  questionEl.textContent = q.question;
  choicesEl.innerHTML = "";

  q.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.onclick = () => checkAnswer(choice);
    choicesEl.appendChild(btn);
  });
}

function checkAnswer(choice) {
  const correct = quiz[currentQuestion].answer;
  const buttons = choicesEl.querySelectorAll("button");
  buttons.forEach(btn => btn.disabled = true);

  if (choice === correct) {
    showPopup("正解！", true);
    score++;
  } else {
    showPopup(`不正解！\n正解は「${correct}」`, false);
  }

  nextBtn.classList.remove("hidden");
}

function showPopup(text, isCorrect) {
  popup.textContent = text;
  popup.className = `show ${isCorrect ? "correct" : "wrong"}`;
  popup.classList.remove("hidden");

  popup.onclick = () => {
    popup.className = "hidden";
  };
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
  questionEl.textContent = "🎉 終了！";
  choicesEl.innerHTML = "";
  popup.textContent = `あなたの得点は ${score} / ${quiz.length} 点です`;
  popup.className = "show correct";
  nextBtn.textContent = "もう一度";
  nextBtn.onclick = restartQuiz;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  nextBtn.textContent = "次へ";
  popup.className = "hidden";
  showQuestion();
  nextBtn.classList.add("hidden");
}

showQuestion();
