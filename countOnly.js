const assertEqual = function(actual, expected) {
	if (actual === expected) {
		console.log(`Assertion passed: ${actual} === ${expected}`);
	} else {
		console.log(`Assertion Failed: ${actual} !== ${expected}`);
	}
};

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    console.log(item);
    // Increment the count of each item
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }

  return results;
};

// Test case
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// Output the results to see the counts
console.log(result);