const ball = document.getElementById("ball");
const basket = document.getElementById("basket");
const scoreText = document.getElementById("score");
const startBtn = document.getElementById("startBtn")

let score = 0;
let basketX = 110;
let ballX = Math.random() * 270;
let ballY = 0;

// Basket move
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    basketX -= 20;
    if (basketX < 0) basketX = 0;
  }

  if (event.key === "ArrowRight") {
    basketX += 20;
    if (basketX > 220) basketX = 220;
  }

  basket.style.left = basketX + "px";
});

// Ball fall
function updateGame() {
  ballY += 5;

  if (ballY >= 470) {
    if (ballX >= basketX && ballX <= basketX + 80) {
      score++;
      scoreText.textContent = score;
    } else {
      alert("Game Over!\nScore: " + score);
      score = 0;
      scoreText.textContent = score;
    }

    ballY = 0;
    ballX = Math.random() * 270;
  }

  ball.style.top = ballY + "px";
  ball.style.left = ballX + "px";
}

let gameInterval;

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";

  if (!gameInterval) {
    gameInterval = setInterval(updateGame, 30);
  }
});