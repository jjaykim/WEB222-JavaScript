const { validateCoord } = require('./solutions');

describe('Problem 5 - validateCoord() function', function () {
  test('valid lat, lng coord returns true', function () {
    let lat = 43.7955;
    let lng = -79.3496;
    expect(validateCoord(lat, lng)).toBe(true);
  });

  test('valid lat at 90 returns true', function () {
    let lat = 90;
    let lng = -79.3496;
    expect(validateCoord(lat, lng)).toBe(true);
  });

  test('valid lat at -90 returns true', function () {
    let lat = -90;
    let lng = -79.3496;
    expect(validateCoord(lat, lng)).toBe(true);
  });

  test('invalid lat < -90 returns false', function () {
    let lat = -90.01;
    let lng = -79.3496;
    expect(validateCoord(lat, lng)).toBe(false);
  });

  test('valid lng at 180 returns false', function () {
    let lat = 43.7955;
    let lng = 180;
    expect(validateCoord(lat, lng)).toBe(true);
  });

  test('valid lng at -180 returns false', function () {
    let lat = 43.7955;
    let lng = -180;
    expect(validateCoord(lat, lng)).toBe(true);
  });

  test('invalid lat > 90 returns false', function () {
    let lat = 90.01;
    let lng = -79.3496;
    expect(validateCoord(lat, lng)).toBe(false);
  });

  test('invalid lng < -180 returns false', function () {
    let lat = 43.7955;
    let lng = -180.00001;
    expect(validateCoord(lat, lng)).toBe(false);
  });

  test('invalid lng > 180 returns false', function () {
    let lat = 43.7955;
    let lng = 180.00001;
    expect(validateCoord(lat, lng)).toBe(false);
  });

  test('invalid lat and lng returns false', function () {
    let lat = 90.00001;
    let lng = 180.00001;
    expect(validateCoord(lat, lng)).toBe(false);
  });
});
