const questions = [
  {
    question: "Which language is used to style web pages?",
    options: ["HTML", "CSS", "Python", "Java"],
    answer: "CSS",
  },
  {
    question: "Which method selects an element by ID?",
    options: ["querySelectorAll", "getElementById", "forEach", "append"],
    answer: "getElementById",
  },
  {
    question: "Which method saves data in localStorage?",
    options: ["getItem", "removeItem", "setItem", "parse"],
    answer: "setItem",
  },
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionTitle = document.querySelector("#question");
const optionsDiv = document.querySelector("#options");
const nextBtn = document.querySelector("#nextBtn");
const scoreText = document.querySelector("#score");
const bestScoreText = document.querySelector("#bestScore");

let bestScore = Number(localStorage.getItem("bestScore")) || 0;

function showBestScore() {
  bestScoreText.textContent = "Best Score: " + bestScore;
}

function showQuestion() {
  answered = false;
  optionsDiv.innerHTML = "";

  const current = questions[currentQuestion];

  questionTitle.textContent = current.question;

  current.options.forEach(function (option) {
    const button = document.createElement("button");

    button.textContent = option;

    button.addEventListener("click", function () {
      if (answered) return;

      answered = true;

      if (option === current.answer) {
        score++;
        scoreText.textContent = "Correct!";
      } else {
        scoreText.textContent = "Incorrect!";
      }
    });

    optionsDiv.append(button);
  });
}

nextBtn.addEventListener("click", function () {
  if (!answered) {
    scoreText.textContent = "Please select an answer first.";
    return;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
    scoreText.textContent = "";
  } else {
    questionTitle.textContent = "Quiz completed!";
    optionsDiv.innerHTML = "";
    nextBtn.disabled = true;

    scoreText.textContent = "Your score: " + score + " / " + questions.length;

    if (score > bestScore) {
      bestScore = score;
      localStorage.setItem("bestScore", bestScore);
    }

    showBestScore();
  }
});

showQuestion();
showBestScore();
