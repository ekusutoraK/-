const quizData = [
  {
    question: "日本の首都は？",
    choices: ["大阪", "京都", "東京", "名古屋"],
    answer: 2
  },
  {
    question: "地球は何番目の惑星？",
    choices: ["1番目", "3番目", "5番目", "7番目"],
    answer: 1
  }
];

let current = 0;
let score = 0;

function startQuiz() {
  document.querySelector(".home").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  const q = quizData[current];
  document.getElementById("question").textContent = q.question;
  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";
  q.choices.forEach((c, i) => {
    const btn = document.createElement("button");
    btn.textContent = c;
    btn.onclick = () => checkAnswer(i);
    choicesDiv.appendChild(btn);
  });
}

function checkAnswer(i) {
  if (i === quizData[current].answer) score++;
  current++;
  if (current < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("score").textContent = `${score} / ${quizData.length}問正解！`;
}

function goHome() {
  document.getElementById("result").classList.add("hidden");
  document.querySelector(".home").classList.remove("hidden");
  current = 0;
  score = 0;
}
