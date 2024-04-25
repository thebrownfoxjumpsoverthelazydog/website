document.addEventListener('DOMContentLoaded', function() {
    const board = document.getElementById('board');
    const status = document.getElementById('status');
    const resetButton = document.getElementById('resetButton');

    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameEnded = false;

    // Create game board cells
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        cell.addEventListener('click', () => handleCellClick(i));
        board.appendChild(cell);
    }

    // Handle cell click
    function handleCellClick(index) {
        if (gameEnded || gameBoard[index] !== '') return;

        gameBoard[index] = currentPlayer;
        renderBoard();

        if (checkWinner(currentPlayer)) {
            status.textContent = `Player ${currentPlayer} wins!`;
            gameEnded = true;
        } else if (isBoardFull()) {
            status.textContent = "It's a tie!";
            gameEnded = true;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            status.textContent = `Player ${currentPlayer}'s turn`;
        }
    }

    // Render game board
    function renderBoard() {
        board.childNodes.forEach((cell, index) => {
            cell.textContent = gameBoard[index];
        });
    }

    // Check for a winner
    function checkWinner(player) {
        const winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6] // diagonals
        ];

        return winningCombos.some(combo =>
            combo.every(index => gameBoard[index] === player)
        );
    }

    // Check if the board is full
    function isBoardFull() {
        return gameBoard.every(cell => cell !== '');
    }

    // Reset game
    resetButton.addEventListener('click', () => {
        currentPlayer = 'X';
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        gameEnded = false;
        status.textContent = `Player ${currentPlayer}'s turn`;
        renderBoard();
    });

    // Initial status
    status.textContent = `Player ${currentPlayer}'s turn`;
});
