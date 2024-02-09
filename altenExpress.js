//
/**
 * Express server that evaluates and returns the result of a mathematical expression.
 * @module MathExpressionServer
 */

const express = require('express');
const app = express();

/**
 * Handles all GET requests and evaluates the mathematical expression provided in the URL path.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
app.get('*', (req, res) => {
  try {
    const expression = req.path.substring(1); // Remove the leading '/'
    const result = eval(expression); // Evaluate the expression
    res.json({ result });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
