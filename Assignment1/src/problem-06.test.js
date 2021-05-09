const { formatCoord, formatCoords } = require('./solutions');

describe('Problem 6', function () {
  describe('formatCoord() function', function () {
    test('valid lat, lng coord should be formatted correctly', function () {
      let result = formatCoord(43.7955, -79.3496);
      expect(result).toBe('43.7955,-79.3496');
    });

    test('valid lat, lng coord should be formatted correctly with includeBrackets', function () {
      let result = formatCoord(43.7955, -79.3496, true);
      expect(result).toBe('[43.7955,-79.3496]');
    });

    test('invalid lat in coord should throw', function () {
      expect(() => formatCoord(365, -79.3496)).toThrowError();
    });

    test('invalid lng in coord should throw', function () {
      expect(() => formatCoord(43.7955, 366)).toThrowError();
    });
  });

  describe('formatCoords() function', function () {
    test('valid lat, lng coord should be formatted correctly', function () {
      let result = formatCoords(43.7955, -79.3496);
      expect(result).toBe('[[43.7955,-79.3496]]');
    });

    test('multiple valid lat, lng coord should be formatted correctly', function () {
      let result = formatCoords(43.7955, -79.3496, 43.7955, -79.3496, 43.7955, -79.3496);
      expect(result).toBe('[[43.7955,-79.3496], [43.7955,-79.3496], [43.7955,-79.3496]]');
    });

    test('invalid lat coord should throw', function () {
      expect(() => formatCoords(10000, -79.3496)).toThrowError();
    });

    test('invalid lng coord should throw', function () {
      expect(() => formatCoords(43.7955, -1234134134)).toThrowError();
    });

    test('invalid number of lat, lng pairs should throw', function () {
      expect(() => formatCoords(43.7955, -79.3496, 43.7955)).toThrowError();
    });
  });
});
