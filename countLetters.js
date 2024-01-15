const assertEqual = function(actual, expected) {
	if (actual === expected) {
		console.log(`Assertion passed: ${actual} === ${expected}`);
	} else {
		console.log(`Assertion Failed: ${actual} !== ${expected}`);
	}
};

const countLetters = function(sentence) {
  const letterCounts = {};

  for (const letter of sentence) {
    // Skip spaces
    if (letter !== ' ') {
      // Increment the count of each letter
      if (letterCounts[letter]) {
        letterCounts[letter] += 1;
      } else {
        letterCounts[letter] = 1;
      }
    }
  }

  return letterCounts;
};

// Test case
const result = countLetters('LHL');

// Output the results to see the counts
console.log(result);

// Test case with assertion
assertEqual(result['L'], 2);
assertEqual(result['H'], 1);