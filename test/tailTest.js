const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns an empty array for an array with one element", () => {
    assert.deepEqual(tail([1]), []);
  });
  
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  
  it("returns [] for an empty array", () => {
    assert.deepEqual(tail([]), []);
  });
  

  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  

});