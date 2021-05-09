const data = require('./data');
const { getResults } = require('./observations');

describe('Problem 00 - getResults() function', function () {
  test('getResults() should return an Array', function () {
    /**
     * We expect that the return value should be an Array
     */
    const results = getResults(data);
    const resultsIsArray = Array.isArray(results);
    expect(resultsIsArray).toBe(true);
  });

  test('getResults() should contain the correct number of items', function () {
    /**
     * We also expect that this array should have 10 items in it
     */
    const results = getResults(data);
    expect(results.length).toBe(10);
  });
});
