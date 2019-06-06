// capitalizeFirst.js
const assert = require('assert');

// WRITE THE ACTUAL FUNCTION HERE
function capitalizeFirst(input) {
  let output = '';
  for (let i = 0; i < input.length; i++) {
    if (i === 0) {
      output += input[0].toUpperCase();
    } else {
      output += input[i];
    }
  }
  return output;
}

// Check that capitalizeFirst is a function
assert.strictEqual(typeof capitalizeFirst, 'function');
// Check that capitalizeFirst accepts one argument
assert.strictEqual(capitalizeFirst.length, 1);
// Check that capitalizeFirst transforms javaScript correctly
assert.strictEqual(capitalizeFirst('javaScript'), 'JavaScript');
// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirst('z'), 'Z');
// Check that it works for an empty string
assert.strictEqual(capitalizeFirst(''), '');