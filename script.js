let quiz = [];
let index = 0;
let score = 0;
let timer;
let timeLeft = 300;
let answers = [];

function startQuiz(category) {
  quiz = questions[category];
  document.getElementById("categoryScreen").classList.add("hidden");
  document.getElementById("quizScreen").classList.remove("hidden");
  startTimer();
  loadQuestion();
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    let min = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    let sec = String(timeLeft % 60).padStart(2, '0');
    document.getElementById("timer").innerText = `${min}:${sec}`;
    if (timeLeft <= 0) finishQuiz();
  }, 1000);
}

function loadQuestion() {
  let q = quiz[index];
  document.getElementById("question").innerText = q.q;
  let optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  q.options.forEach((opt, i) => {
    let div = document.createElement("div");
    div.className = "option";
    div.innerText = opt;
    div.onclick = () => selectAnswer(i, div);
    optionsDiv.appendChild(div);
  });
  document.getElementById("progressBar").style.width = ((index+1)/quiz.length)*100 + "%";
}

function selectAnswer(i, el) {
  if (answers[index] !== undefined) return;
  answers[index] = i;
  document.querySelectorAll(".option").forEach(o => o.classList.add("disabled"));
  if (i === quiz[index].answer) score++;
}

document.getElementById("nextBtn").onclick = () => {
  if (index < quiz.length - 1) {
    index++;
    loadQuestion();
  } else {
    finishQuiz();
  }
};

function finishQuiz() {
  clearInterval(timer);
  document.getElementById("quizScreen").classList.add("hidden");
  document.getElementById("resultScreen").classList.remove("hidden");
  document.getElementById("score").innerText = `Score: ${score} / ${quiz.length}`;

  let ansDiv = document.getElementById("answers");
  ansDiv.innerHTML = "";
  quiz.forEach((q, i) => {
    let p = document.createElement("p");
    p.innerHTML = `<b>${q.q}</b><br>
    Your Answer: ${q.options[answers[i]] || "Not Answered"}<br>
    Correct Answer: ${q.options[q.answer]}<br>
    Explanation: ${q.exp}`;
    ansDiv.appendChild(p);
  });
}

function restartQuiz() {
  location.reload();
}
