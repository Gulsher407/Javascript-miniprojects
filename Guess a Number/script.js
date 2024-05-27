let numberToGuess;
let attemptsLeft;
const maxAttempts = 10;

function initializeGame() {
    numberToGuess = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = maxAttempts;
    document.getElementById('feedback').textContent = '';
    document.getElementById('attempts').textContent = `Attempts left: ${attemptsLeft}`;
    document.getElementById('guessInput').value = '';
}

function guessNumber() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    if (isNaN(userGuess)) {
        document.getElementById('feedback').textContent = 'Please enter a valid number.';
        return;
    }

    attemptsLeft--;

    if (userGuess < numberToGuess) {
        document.getElementById('feedback').textContent = 'Too low! Try again.';
    } else if (userGuess > numberToGuess) {
        document.getElementById('feedback').textContent = 'Too high! Try again.';
    } else {
        document.getElementById('feedback').textContent = `Congratulations! You guessed the number in ${maxAttempts - attemptsLeft} attempts.`;
        document.getElementById('guessInput').disabled = true;
        return;
    }

    document.getElementById('attempts').textContent = `Attempts left: ${attemptsLeft}`;

    if (attemptsLeft === 0) {
        document.getElementById('feedback').textContent = `Sorry! You've used all ${maxAttempts} attempts. The number was ${numberToGuess}. Better luck next time!`;
        document.getElementById('guessInput').disabled = true;
    }
}

function resetGame() {
    document.getElementById('guessInput').disabled = false;
    initializeGame();
}

window.onload = initializeGame;
