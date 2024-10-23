const OPERATIONS = ['+', '-', '*', '/'];

function generateQuestion() {
    const operation = getRandomOperation();
    let num1, num2, answer;

    switch (operation) {
        case '+':
            [num1, num2] = getAdditionNumbers();
            answer = num1 + num2;
            break;
        case '-':
            [num1, num2] = getSubtractionNumbers();
            answer = num1 - num2;
            break;
        case '*':
            [num1, num2] = getMultiplicationNumbers();
            answer = num1 * num2;
            break;
        case '/':
            [num1, num2] = getDivisionNumbers();
            answer = num1 / num2;
            break;
    }

    const question = `What is ${num1} ${operation} ${num2}?`;
    const answers = generateAnswers(answer);
    const correctAnswerIndex = answers.indexOf(answer.toString());

    return {
        question,
        answers,
        correctAnswer: correctAnswerIndex
    };
}

function getRandomOperation() {
    return OPERATIONS[Math.floor(Math.random() * OPERATIONS.length)];
}

function getAdditionNumbers() {
    return [getRandomNumber(1, 50), getRandomNumber(1, 50)];
}

function getSubtractionNumbers() {
    const num1 = getRandomNumber(26, 50);
    const num2 = getRandomNumber(1, 25);
    return [num1, num2];
}

function getMultiplicationNumbers() {
    return [getRandomNumber(1, 12), getRandomNumber(1, 12)];
}

function getDivisionNumbers() {
    const num2 = getRandomNumber(1, 12);
    const answer = getRandomNumber(1, 12);
    return [num2 * answer, num2];
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateAnswers(correctAnswer) {
    const answers = [correctAnswer.toString()];
    while (answers.length < 4) {
        const wrongAnswer = correctAnswer + getRandomOffset();
        if (wrongAnswer !== correctAnswer && !answers.includes(wrongAnswer.toString())) {
            answers.push(wrongAnswer.toString());
        }
    }
    return shuffleArray(answers);
}

function getRandomOffset() {
    return Math.floor(Math.random() * 10) - 5;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
