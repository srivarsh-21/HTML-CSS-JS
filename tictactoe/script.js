document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll('.box'); // Select all the boxes
    const resetBtn = document.getElementById('reset-btn'); // Select the reset button
    let currentPlayer = 'X'; // Start with player X

    // Check if a player has won the game in function
    function checkWin() {
        // Define winning combinations
        const winningCombinations = [
            [0, 1, 2], // Top row
            [3, 4, 5], // Middle row
            [6, 7, 8], // Bottom row
            [0, 3, 6], // Left column
            [1, 4, 7], // Middle column
            [2, 5, 8], // Right column
            [0, 4, 8], // Diagonal from top-left to bottom-right
            [2, 4, 6]  // Diagonal from top-right to bottom-left
        ];

        // Check each winning combination
        for (const combo of winningCombinations) {
            const [a, b, c] = combo;
            if (boxes[a].textContent && boxes[a].textContent === boxes[b].textContent && boxes[a].textContent === boxes[c].textContent) {
                setTimeout(() => alert(`${currentPlayer} wins!`), 10); // Show win message
                return true; // A player has won
            }
        }

        // Check if all boxes are filled
        if ([...boxes].every(box => box.textContent)) {
            setTimeout(() => alert('It\'s a draw!'), 10); // Show draw message
            return true; // The game is a draw
        }

        return false; // No win or draw
    }
    // Function to handle box click
    // Handle a box click
    function handleClick(e) {
        const box = e.target;
        if (box.textContent === '') { // If the box is empty
            box.textContent = currentPlayer; // Mark the box with the current player
            if (!checkWin()) { // If no win, switch player
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    }

    // Function to Reset the game
    function resetGame() {
        boxes.forEach(box => box.textContent = ''); // Clear all boxes
        currentPlayer = 'X'; // Reset to player X
    }

    // Add event listeners
    boxes.forEach(box => box.addEventListener('click', handleClick)); // Handle box clicks
    resetBtn.addEventListener('click', resetGame); // Handle reset button click
});
