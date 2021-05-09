const { kebab } = require('./solutions');

describe('Problem 1 - kebab() function', function () {
  test('returns string unmodified if it is already kebabed', function () {
    let result = kebab('ABC');
    expect(result).toBe('ABC');
  });

  test('returns string with leading whitespace removed', function () {
    let result = kebab(' ABC');
    expect(result).toBe('ABC');
  });

  test('returns string with trailing whitespace removed', function () {
    let result = kebab('ABC ');
    expect(result).toBe('ABC');
  });

  test('returns string with all uppercase letters', function () {
    let result = kebab('abc');
    expect(result).toBe('ABC');
  });

  test('returns string with spaces removed', function () {
    let result = kebab(' A B C                ');
    expect(result).toBe('A-B-C');
  });

  test('returns string with tabs removed', function () {
    let result = kebab('\tA\tB\tC\t');
    expect(result).toBe('A-B-C');
  });

  test('returns string with tabs and spaces removed', function () {
    let result = kebab(' A B\t C ');
    expect(result).toBe('A-B-C');
  });

  test('returns string with periods removed', function () {
    let result = kebab('A.B..............................C');
    expect(result).toBe('A-B-C');
  });

  test('returns string with periods, tabs, and spaces removed', function () {
    let result = kebab('A. b. . . . . . . \t\t\t  ....\t. . . . .   ......c..     ....');
    expect(result).toBe('A-B-C-');
  });
});
