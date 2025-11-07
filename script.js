const quizData = [
  {
    question: "日本の首都は？",
    choices: ["大阪", "東京", "名古屋", "札幌"],
    answer: "東京"
  },
  {
    question: "3 + 5 は？",
    choices: ["5", "8", "10", "6"],
    answer: "8"
  },
  {
    question: "リンゴの英単語は？",
    choices: ["banana", "grape", "apple", "orange"],
    answer: "apple"
  }
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function showQuestion() {
  const q = quizData[current];
  questionEl.textContent = q.question;
  choicesEl.innerHTML = "";
  q.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.classList.add("choice");
    btn.onclick = () => checkAnswer(choice);
    choicesEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = quizData[current].answer;
  if (selected === correct) {
    alert("正解！");
    score++;
  } else {
    alert(`不正解！正解は「${correct}」です。`);
  }
  nextBtn.style.display = "inline-block";
}

nextBtn.onclick = () => {
  current++;
  if (current < quizData.length) {
    showQuestion();
    nextBtn.style.display = "none";
  } else {
    showResult();
  }
};

function showResult() {
  questionEl.textContent = "";
  choicesEl.innerHTML = "";
  nextBtn.style.display = "none";
  resultEl.textContent = `あなたのスコア：${score} / ${quizData.length}`;
}

showQuestion();
nextBtn.style.display = "none";
