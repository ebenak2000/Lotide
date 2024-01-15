// Function to compare values and print assertions
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`Assertion passed: ${actual} === ${expected}`);
    } else {
      console.log(`Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  // Function to find a key by its corresponding value in an object
  const findKeyByValue = function(object, value) {
    for (const key of Object.keys(object)) {
      if (object[key] === value) {
        return key;
      }
    }
    return undefined;
  };
  
  // Test cases
  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  assertEqual(findKeyByValue({}, "Test"), undefined);
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");