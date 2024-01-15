// Function to compare values and print assertions
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`Assertion passed: ${actual} === ${expected}`);
    } else {
      console.log(`Assertion Failed: ${actual} !== ${expected}`);
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
  
    // Check if objects have the same number of keys
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    // Loop through each key in object1
    for (const key of keys1) {
      // Check if values are arrays
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        // If values are arrays, compare them using eqArrays
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else {
        // If values are not arrays, compare them using ===
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
  
    // If all keys and values are equal, return true
    return true;
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

  assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
  
  const longSleeveShirtObject = { 
    size: "medium", 
    color: "red", 
    sleeveLength: "long" 
  };

  assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
  
  const multiColorShirtObject = { 
    colors: ["red", "blue"], 
    size: "medium" 
  };
  const anotherMultiColorShirtObject = { 
    size: "medium", 
    colors: ["red", "blue"] 
  };

  assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
  
  const longSleeveMultiColorShirtObject = { 
    size: "medium", 
    colors: ["red", "blue"], 
    sleeveLength: "long" 
  };
  
  assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);