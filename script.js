let gameState = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];
let currentPlayer = 'X';

function initializeGame() {
  for (let i = 0; i < 9; i++) {
    document.getElementById(`cell-${i}`).addEventListener('click', handleClick);
  }
  document.getElementById('reset-button').addEventListener('click', resetGame);
  updateMessage(`turnMessage`, `Player ${currentPlayer}'s turn`);
}

function handleClick(event) {
  let cell = event.target;
  let index = parseInt(cell.id.split('-')[1]);
  let row = Math.floor(index / 3);
  let col = index % 3;
  if (gameState[row][col] === null) {
    gameState[row][col] = currentPlayer;
    cell.textContent = currentPlayer;
    if (checkWin()) {
      updateMessage(`winMessage`, `Player ${currentPlayer} wins!`);
      return;
    }
    if (checkDraw()) {
      updateMessage(`drawMessage`, `It's a draw!`);
      return;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    updateMessage(`turnMessage`, `Player ${currentPlayer}'s turn`);
  }
}

function checkWin() {
  const winningCombinations = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]]
  ];
  for (let combination of winningCombinations) {
    if (
      gameState[combination[0][0]][combination[0][1]] === currentPlayer &&
      gameState[combination[1][0]][combination[1][1]] === currentPlayer &&
      gameState[combination[2][0]][combination[2][1]] === currentPlayer
    ) {
      return true;
    }
  }
  return false;
}

function checkDraw() {
  for (let row of gameState) {
    for (let cell of row) {
      if (cell === null) {
        return false;
      }
    }
  }
  return true;
}

function resetGame() {
  gameState = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
  currentPlayer = 'X';
  for (let i = 0; i < 9; i++) {
    document.getElementById(`cell-${i}`).textContent = '';
  }
  updateMessage(`turnMessage`, `Player ${currentPlayer}'s turn`);
}

function updateMessage(messageId, message) {
  document.getElementById(messageId).textContent = message;
}

window.onload = initializeGame;