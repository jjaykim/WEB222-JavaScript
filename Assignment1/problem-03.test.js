const { parseDateString } = require('./solutions');

describe('Problem 3 - parseDateString() function', function () {
  // Checks that a date uses the given year, month, day values
  function assertDate(d, year, month, day) {
    return d && d.getFullYear() === year && d.getMonth() === month - 1 && d.getDate() === day;
  }

  test('not passing a date string throws an Error', function () {
    // null
    expect(() => parseDateString(null)).toThrow();
    // undefined
    expect(() => parseDateString()).toThrow();
    // empty string
    expect(() => parseDateString('')).toThrow();
  });

  test('passing an invalid date string format throws an Error', function () {
    // 2-digit year
    expect(() => parseDateString('20-03-12')).toThrow();
    // 1-digit month
    expect(() => parseDateString('2020-3-12')).toThrow();
    // using spaces vs. dashes
    expect(() => parseDateString('2020 03 12')).toThrow();
    // using slashes vs dashes
    expect(() => parseDateString('2020/03/12')).toThrow();
    // string, but not a date string
    expect(() => parseDateString('invalid string')).toThrow();
  });

  test('passing a valid date string results in correct date', function () {
    let result = parseDateString('2021-01-01');
    expect(assertDate(result, 2021, 1, 1)).toBe(true);
  });

  test('passing a valid date string results in correct month and day', function () {
    let result = parseDateString('2021-29-01');
    expect(assertDate(result, 2021, 1, 29)).toBe(true);
  });
});
