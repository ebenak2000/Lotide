// Importing inspect function from the util library
const inspect = require('util').inspect;

// Function to compare values and print assertions
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// Function to compare arrays and return true if they are equal
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

// Function to compare objects and return true if they are equal
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
        // If valus are not arrays, compare them using ===
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  // if all the keys and values are equal, return true
  return true;
};

// Function to compare objects and print assertions
const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Objects are equal: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Objects are not equal: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// Test cases
const shirtObject = { 
  color: "red", 
  size: "medium" 
};

const anotherShirtObject = { 
  size: "medium", 
  color: "red" 
};

assertObjectsEqual(shirtObject, anotherShirtObject);

const longSleeveShirtObject = { 
  size: "medium", 
  color: "red", 
  sleeveLength: "long" 
};

assertObjectsEqual(shirtObject, longSleeveShirtObject);

const multiColorShirtObject = { 
  colors: ["red", "blue"], 
  size: "medium" 
};
const anotherMultiColorShirtObject = { 
  size: "medium", 
  colors: ["red", "blue"] 
};

assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);

const longSleeveMultiColorShirtObject = { 
  size: "medium", 
  colors: ["red", "blue"], 
  sleeveLength: "long" 
};

assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject);