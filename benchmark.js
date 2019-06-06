/**
 * Naive implementation
 * @param {string} input Input string
 */
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

/**
 * Improved implementation
 * @param {string} input Input string
 */
function capitalizeFirstRefactored(input) {
  return input.length > 0
    ? input[0].toUpperCase() + input.slice(1)
    : '';
}

/**
 * Benchmarking function
 * @param {*} label Label for the benchmark
 * @param {*} fn Function to benchmark
 * @param  {...any} rest Arguments passed to the function
 */
const benchmark = (label, fn, ...rest) => {
  // Record timestamp before running benchmark
  const dateStart = new Date();
  // Run the function 1M times
  for (let i = 0; i < 1000000; i++) {
    fn(...rest);
  }
  // Record timestamp after running benchmark
  const dateEnd = new Date();
  // Compute milliseconds diff between end and start timestamps
  const diff = dateEnd.getTime() - dateStart.getTime();
  console.log(label, diff + 'ms');
}

benchmark('naive implementation', capitalizeFirst, 'javaScript');
benchmark('improved implementation', capitalizeFirstRefactored, 'javaScript');
