document.addEventListener('DOMContentLoaded', function() {
    const cells = document.querySelectorAll('.cell');
    const status = document.getElementById('status');
    const resetButton = document.getElementById('resetButton');

    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameEnded = false;

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (gameEnded || cell.textContent !== '') return;

            const index = parseInt(cell.dataset.index);
            gameBoard[index] = currentPlayer;
            cell.textContent = currentPlayer;

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
        });
    });

    resetButton.addEventListener('click', () => {
        currentPlayer = 'X';
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        gameEnded = false;
        cells.forEach(cell => {
            cell.textContent = ''; // Clear cell content
        });
        status.textContent = `Player ${currentPlayer}'s turn`;
    });

    function checkWinner(player) {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];

        return winPatterns.some(pattern =>
            pattern.every(index => gameBoard[index] === player)
        );
    }

    function isBoardFull() {
        return gameBoard.every(cell => cell !== '');
    }
});



