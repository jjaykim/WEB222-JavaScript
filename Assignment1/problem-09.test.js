const { pureBool, all, none } = require('./solutions');

describe('Problem 9 - pureBool(), all(), none() functions', function () {
  describe('pureBool()', function () {
    test('pure boolean values work as expected', function () {
      expect(pureBool(true)).toBe(true);
      expect(pureBool(false)).toBe(false);
    });

    test('various forms of Yes should return true', function () {
      expect(pureBool('Yes')).toBe(true);
      expect(pureBool('yes')).toBe(true);
      expect(pureBool('YES')).toBe(true);
      expect(pureBool('YeS')).toBe(true);
      expect(pureBool('YEs')).toBe(true);
      expect(pureBool('Y')).toBe(true);
      expect(pureBool('y')).toBe(true);
    });

    test('various forms of No should return false', function () {
      expect(pureBool('No')).toBe(false);
      expect(pureBool('no')).toBe(false);
      expect(pureBool('nO')).toBe(false);
      expect(pureBool('n')).toBe(false);
      expect(pureBool('N')).toBe(false);
    });

    test('various forms of True should return true', function () {
      expect(pureBool('True')).toBe(true);
      expect(pureBool('true')).toBe(true);
      expect(pureBool('TRUE')).toBe(true);
      expect(pureBool('TruE')).toBe(true);
      expect(pureBool('TRuE')).toBe(true);
      expect(pureBool('TRue')).toBe(true);
      expect(pureBool('trUE')).toBe(true);
      expect(pureBool('truE')).toBe(true);
      expect(pureBool('t')).toBe(true);
      expect(pureBool('T')).toBe(true);
    });

    test('various forms of False should return false', function () {
      expect(pureBool('False')).toBe(false);
      expect(pureBool('false')).toBe(false);
      expect(pureBool('FALSE')).toBe(false);
      expect(pureBool('FALSe')).toBe(false);
      expect(pureBool('FALSe')).toBe(false);
      expect(pureBool('FALse')).toBe(false);
      expect(pureBool('FAlse')).toBe(false);
      expect(pureBool('falsE')).toBe(false);
      expect(pureBool('falSE')).toBe(false);
      expect(pureBool('faLSE')).toBe(false);
      expect(pureBool('fALSE')).toBe(false);
      expect(pureBool('f')).toBe(false);
      expect(pureBool('F')).toBe(false);
    });

    test('the number 1 should be true', function () {
      expect(pureBool(1)).toBe(true);
    });
    test('the number -1 should be false', function () {
      expect(pureBool(-1)).toBe(false);
    });

    test('various non-values should be false', function () {
      expect(pureBool(undefined)).toBe(false);
      expect(pureBool()).toBe(false);
      expect(pureBool(null)).toBe(false);
      // expect(pureBool(NaN)).toBe(false);
    });
  });

  describe('all()', function () {
    test('lists of normalized true values results in true', function () {
      expect(all('Yes', 'yes', 'YES', 'Y', 't', 'TRUE', true, 'True', 1)).toBe(true);
    });

    test('lists of mostly normalized true values results in false', function () {
      expect(all('Yes', 'yes', 'YES', 'Y', 't', 'TRUE', true, 'True', 1)).toBe(true);
      // Last value switched to false
      expect(all('Yes', 'yes', 'YES', 'Y', 't', 'TRUE', true, 'True', 0)).toBe(false);
    });
  });

  describe('none()', function () {
    test('lists of normalized false values results in true', function () {
      expect(
        none('No', 'no', 'NO', 'N', 'n', 'f', 'FALSE', false, 'False', 0, null, undefined, -1)
      ).toBe(true);
    });

    test('lists of mostly normalized false values results in false', function () {
      expect(
        none('No', 'no', 'NO', 'N', 'n', 'f', 'FALSE', false, 'False', 0, null, undefined, -1)
      ).toBe(true);
      // Last value switched to true
      expect(
        none('No', 'no', 'NO', 'N', 'n', 'f', 'FALSE', false, 'False', 0, null, undefined, 1)
      ).toBe(false);
    });
  });
});
