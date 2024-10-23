// my-function.js

exports.handler = async (event, context) => {
  // Get the math operation and numbers from the request
  const { operation, num1, num2 } = JSON.parse(event.body);

  // Perform the math operation
  let result;
  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      result = num1 / num2;
      break;
    default:
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid operation' }),
      };
  }

  // Return the result
  return {
    statusCode: 200,
    body: JSON.stringify({ result }),
  };
};
