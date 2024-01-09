const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Implement the tail function
const tail = function(array) {
  if (array.length <= 1) {
    return [];
  }
  return array.slice(1);
};

// Test cases
const words = ["Yo Yo", "Lighthouse", "Labs"];
const result = tail(words);

assertEqual(words.length, 3); 


assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs"); 


const singleElementArray = [1];
assertEqual(tail(singleElementArray).length, 0); 


const emptyArray = [];
assertEqual(tail(emptyArray).length, 0);
