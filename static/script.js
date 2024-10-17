const guessInput = document.getElementById('guess');
const feedbackDiv = document.getElementById('feedback');

guessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const guess = guessInput.value.trim();
        if (guess.length === 5) {
            // TO DO: Call Flask backend to check guess
            console.log(`Guess: ${guess}`);
            feedbackDiv.innerHTML = `<p>Guess: ${guess}</p>`;
        } else {
            feedbackDiv.innerHTML = '<p>Please enter a 5-letter word!</p>';
        }
    }
});
