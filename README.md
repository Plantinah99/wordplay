WordPlay
Word Guessing Game
Overview
WordPlay is a word guessing game where players attempt to guess a randomly generated 5-letter word within 6 attempts.
Architecture
Backend: Flask (Python)
Frontend: HTML, CSS, JavaScript
Storage: None (game state stored in memory)
Technologies & Services
Python 3.8+
Flask 2.0+
JavaScript
HTML5
CSS3
Gameplay
The game generates a random 5-letter word.
The player has 6 attempts to guess the word.
After each guess, the game provides feedback:
G (Green): Correct letter in correct position.
Y (Yellow): Correct letter, wrong position.
R (Red): Incorrect letter.
The game ends when the player guesses the word or runs out of attempts.
Installation
Clone the repository: git clone https://github.com/your-username/wordplay.git
Install dependencies: pip install -r requirements.txt
Run the app: python app.py
License
MIT License
