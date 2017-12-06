import {romanToArabic} from 'script.js';
import {assert} from 'chai';

describe("Roman numbers", function() {

  it("should return 1 for I", function() {
    assert.equal(romanToArabic('I'), 1);
  });

  it("should return 1234 MCCXXXIV", function() {
    assert.equal(romanToArabic('MCCXXXIV'), 1234);
  });

});
