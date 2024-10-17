from flask import Flask, jsonify, request

app = Flask(__name__)

# Temporary word storage
words = ["apple", "table", "chair", "mouse", "phone"]

@app.route('/word', methods=['GET'])
def get_word():
    import random
    word = random.choice(words)
    return jsonify({'word': word})

@app.route("/check_guess", methods=["POST"])
def check_guess():
    guess = request.form["guess"]
    if len(guess) != 5:
        return jsonify({"error": "Please enter a 5-letter word!"})
    
    # Generate a random 5-letter word (for now, hardcode a word)
    word_to_guess = get_word().json['word']
    
    # Check if the guess is correct
    if guess == word_to_guess:
        return jsonify({"result": "Correct!"})
    else:
        # Generate feedback (G, Y, R)
        feedback = []
        for i in range(5):
            if guess[i] == word_to_guess[i]:
                feedback.append("G")
            elif guess[i] in word_to_guess:
                feedback.append("Y")
            else:
                feedback.append("R")
        return jsonify({"result": "".join(feedback)})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
