// This was fun to revisit, I like looking over my old code and noticing how much of a difference i've made already
const assertArraysEqual = function(arr1, arr2) {
    const message = eqArrays(arr1, arr2)
      ? "Assertion passed: Arrays are equal"
      : "Assertion Failed: Arrays are not equal";
  
    console.log(message);
  };
  
  const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`Assertion passed: ${actual} === ${expected}`);
    } else {
      console.log(`Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
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
  
  // Function to flatten an array with one level of nesting
  const flatten = function(arr) {
    let flattenedArray = [];
    for (let element of arr) {
      if (Array.isArray(element)) {
        flattenedArray = flattenedArray.concat(element);
      } else {
        flattenedArray.push(element);
      }
    }
    return flattenedArray;
  };
  
  // Test cases
  const inputArray = [1, 2, [3, 4], 5, [6]];
  const expectedOutput = [1, 2, 3, 4, 5, 6];
  assertArraysEqual(flatten(inputArray), expectedOutput);