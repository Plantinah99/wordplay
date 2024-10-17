from flask import Flask, jsonify, request

app = Flask(__name__)

# Temporary word storage
words = ["apple", "table", "chair", "mouse", "phone"]

@app.route('/word', methods=['GET'])
def get_word():
    import random
    word = random.choice(words)
    return jsonify({'word': word})

if __name__ == '__main__':
    app.run(debug=True)
