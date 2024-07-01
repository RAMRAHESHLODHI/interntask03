let currentPlayer = 'X';
let gameBoard = [];

document.querySelectorAll('.cell').forEach((cell, index) => {
  cell.addEventListener('click', () => handleClick(index));
});

document.querySelector('.reset-btn').addEventListener('click', resetGame);

function handleClick(index) {
  if (gameBoard[index] === undefined) {
    gameBoard[index] = currentPlayer;
    updateCell(index, currentPlayer);
    checkWinningCondition();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    document.querySelector('.player-turn').textContent = `Player ${currentPlayer}'s turn`;
  }
}

function updateCell(index, player) {
  document.querySelector(`[data-index="${index}"]`).textContent = player;
}

function checkWinningCondition() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  for (const combination of winningCombinations) {
    if (gameBoard[combination[0]] === gameBoard[combination[1]] && gameBoard[combination[1]] === gameBoard[combination[2]]) {
      alert(`Player ${gameBoard[combination[0]]} wins!`);
      resetGame();
      return;
    }
  }
}

function resetGame() {
  gameBoard = [];
  document.querySelectorAll('.cell').forEach((cell) => {
    cell.textContent = '';
  });
  currentPlayer = 'X';
  document.querySelector('.player-turn').textContent = `Player ${currentPlayer}'s turn`;
}
