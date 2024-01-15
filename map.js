const words = ["my", "final", "message", "good", "bye"];

// Test Case 1: Uppercase each word
const result1 = map(words, word => word.toUpperCase());
assertArraysEqual(result1, ["MY", "FINAL", "MESSAGE", "GOOD", "BYE"]);

// Test Case 2: Length of each word
const result2 = map(words, word => word.length);
assertArraysEqual(result2, [2, 5, 7, 4, 3]);

// Test Case 3: Add "!" to each word
const result3 = map(words, word => word + "!");
assertArraysEqual(result3, ["my!", "final!", "message!", "good!", "bye!"]);