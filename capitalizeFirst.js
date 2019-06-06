// capitalizeFirst.js

function capitalizeFirst(input) {
  return input.length > 0
    ? input[0].toUpperCase() + input.slice(1)
    : '';
}

module.exports = capitalizeFirst;
