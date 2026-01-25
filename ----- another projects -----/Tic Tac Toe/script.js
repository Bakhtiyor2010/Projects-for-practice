const board = document.getElementById("board");
const result = document.getElementById("result");

let cells = [],
  player = "X",
  gameOver = false;

function createBoard() {
  board.innerHTML = "";
  cells = [];

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");

    cell.className = "cell";
    cell.onclick = () => move(cell, i);
    board.appendChild(cell);
    cells.push("");
  }

  result.textContent = "";
  player = "X";
  gameOver = false;
}

function move(cell, i) {
  if (cells[i] || gameOver) return;

  cells[i] = player;
  cell.textContent = player;

  if (checkWin()) {
    result.textContent = player + " win!";
    gameOver = true;
  } else if (!cells.includes("")) {
    result.textContent = "Draw!";
  } else {
    player = player === "X" ? "O" : "X";
  }
}

function checkWin() {
  const w = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return w.some(
    (p) =>
      cells[p[0]] && cells[p[0]] === cells[p[1]] && cells[p[1]] === cells[p[2]]
  );
}

function resetGame() {
  createBoard();
}

createBoard();