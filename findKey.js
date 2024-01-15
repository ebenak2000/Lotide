const assertEqual = require('./assertEqual')
const findKey = function(object, callback) {
	// Iterate over each key in the object
	for (const key in object) {
	  // Check if the callback returns a truthy value for the current key's value
	  if (callback(object[key])) {
		return key; // Return the first key that satisfies the condition
	  }
	}
	// Return undefined if no key is found
	return undefined;
  };
  
  // Test Case 1
  const restaurants = {
	"Blue Hill": { stars: 1 },
	"Akaleri":   { stars: 3 },
	"noma":      { stars: 2 },
	"elBulli":   { stars: 3 },
	"Ora":       { stars: 2 },
	"Akelarre":  { stars: 3 }
  };
  const result1 = findKey(restaurants, restaurant => restaurant.stars === 2);
  assertEqual(result1, "noma");
  
  // Test Case 2
  const emptyObject = {};
  const result2 = findKey(emptyObject, value => value.stars === 2);
  assertEqual(result2, undefined);
  
  // Test Case 3
  const mixedValues = {
	"one": { value: 1 },
	"two": { value: "two" },
	"three": { value: 3 }
  };
  const result3 = findKey(mixedValues, item => typeof item.value === 'string');
  assertEqual(result3, "two");