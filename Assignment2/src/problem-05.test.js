/* eslint-disable jest/expect-expect */
const data = require('./data');
const { getObservationsByPositionalAccuracy } = require('./observations');

describe('Problem 05 - getObservationsByPositionalAccuracy() function', function () {
  function expectSuitableArray(value, expectedLength) {
    expect(Array.isArray(value)).toBe(true);
    expect(value.length).toBe(expectedLength);
  }

  test("missing options object returns same Array as original", function () {
    let results = getObservationsByPositionalAccuracy(data);
    expect(results).toEqual(data.results);
  });

  test("empty options object returns same Array as original", function () {
    let results = getObservationsByPositionalAccuracy(data, {});
    expect(results).toEqual(data.results);
  });

  test("equal value returns an Array of expected results", function () {
    let results = getObservationsByPositionalAccuracy(data, { equal: 405 });
    expectSuitableArray(results, 1);
    results.forEach((result) => expect(result.positional_accuracy).toBe(405));
  });

  test("equal with unknown value returns an empty Array", function () {
    let results = getObservationsByPositionalAccuracy(data, { equal: 406 });
    expectSuitableArray(results, 0);
  });
  // ================ done =============================

  test("min value returns an Array of expected results", function () {
    let results = getObservationsByPositionalAccuracy(data, { min: 100 });
    expectSuitableArray(results, 3);
    results.forEach((result) =>
      expect(result.positional_accuracy).toBeGreaterThanOrEqual(100)
    );
  });

  test("min value larger than largest known returns an empty Array", function () {
    let results = getObservationsByPositionalAccuracy(data, { min: 1000 });
    expectSuitableArray(results, 0);
  });

  test("max value returns an Array of expected results", function () {
    let results = getObservationsByPositionalAccuracy(data, { max: 100 });
    expectSuitableArray(results, 7);
    results.forEach((result) =>
      expect(result.positional_accuracy).toBeLessThanOrEqual(100)
    );
  });

  test("max value smaller than smallest known returns an empty Array", function () {
    let results = getObservationsByPositionalAccuracy(data, { max: 1 });
    expectSuitableArray(results, 0);
  });

  test("min and max values together return an Array of expected results", function () {
    let results = getObservationsByPositionalAccuracy(data, {
      min: 100,
      max: 200,
    });
    expectSuitableArray(results, 2);
    results.forEach((result) => {
      expect(result.positional_accuracy).toBeLessThanOrEqual(200);
      expect(result.positional_accuracy).toBeGreaterThanOrEqual(100);
    });
  });

  test("min and max values too close together return an empty Array", function () {
    let results = getObservationsByPositionalAccuracy(data, {
      min: 100,
      max: 100,
    });
    expectSuitableArray(results, 0);
  });

  test("equal is used over min/max if all are present", function () {
    let results = getObservationsByPositionalAccuracy(data, {
      equal: 405,
      min: 1,
      max: 100,
    });
    expectSuitableArray(results, 1);
    results.forEach((result) => expect(result.positional_accuracy).toBe(405));
  });
});
