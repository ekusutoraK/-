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
    btn.onclick = () => checkAnswer(choice);
    choicesEl.appendChild(btn);
  });
}

function checkAnswer(choice) {
  const correct = quiz[currentQuestion].answer;
  if (choice === correct) {
    alert("正解！");
    score++;
  } else {
    alert(`不正解！正解は「${correct}」です。`);
  }
  nextBtn.classList.remove("hidden");
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < quiz.length) {
    showQuestion();
    nextBtn.classList.add("hidden");
  } else {
    questionEl.textContent = `終了！あなたの得点は ${score} / ${quiz.length} 点です`;
    choicesEl.innerHTML = "";
    nextBtn.classList.add("hidden");
  }
};

// 最初の問題を表示
showQuestion();
