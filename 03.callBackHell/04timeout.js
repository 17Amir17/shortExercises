console.log("First call");
setTimeout(() => {
  console.log("Second call");
}, 2000);
console.log("Third call");

/**
 * Output:
 * First call
 * Third call
 * Second call
 */
