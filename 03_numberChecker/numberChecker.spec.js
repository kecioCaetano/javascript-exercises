const numberChecker = require('./numberChecker')

describe('numberChecker', () => {
  test.skip('returns true when number is 10', () => {
    expect(numberChecker(10)).toEqual(true);
  });
   
});
