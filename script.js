const cells = document.querySelectorAll(".cell");
const resetButton = document.getElementById("reset");

let currentPlayer = "X";
let gameActive = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWinner() {
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;

        if (
            cells[a].textContent &&
            cells[a].textContent === cells[b].textContent &&
            cells[a].textContent === cells[c].textContent
        ) {
            alert("Player " + cells[a].textContent + "Wins !");
            gameActive = false;
            return;
        }
    }

    let isDraw = true;
    cells.forEach(cell => {
        if (cell.textContent === "") isDraw = false;
    });

    if (isDraw && gameActive) {
        alert("It's a Draw!");
        gameActive = false;
    }
}

cells.forEach(cell => {
    cell.addEventListener("click", () => {
        if (!gameActive) return;

        if (cell.textContent === "") {
            cell.textContent = currentPlayer;
            checkWinner();

            if (gameActive) {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        }
    });
});

resetButton.addEventListener("click", () => {
    cells.forEach(cell => cell.textContent = "");
    currentPlayer = "X";
    gameActive = true;
});