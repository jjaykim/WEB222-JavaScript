const data = require('./data');
const { getObservationsById } = require('./observations');

describe('Problem 04 - getObservationsById() function', function () {
  test('if an unknown id is passed, null is returned', function () {
    expect(getObservationsById(data, 'no-such-id')).toBe(null);
  });

  test('if a single, known id is passed, the full Object should be returned', function () {
    let id = 67868131;
    let result0 = data.results[0];

    expect(result0.id).toBe(id);

    let result = getObservationsById(data, id);
    expect(result).toEqual(result0);
  });

  test('if a multiple known ids are passed, an Array of the full Objects should be returned', function () {
    let id0 = 67868131;
    let result0 = data.results[0];
    expect(result0.id).toBe(id0);

    let id1 = 66528178;
    let result1 = data.results[1];
    expect(result1.id).toBe(id1);

    let result = getObservationsById(data, id0, id1);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(2);
    expect(result[0]).toEqual(result0);
    expect(result[1]).toEqual(result1);
  });

  test('if some known and some unknown ids are passed, an Array of the known Objects should be returned', function () {
    let id0 = 67868131;
    let result0 = data.results[0];
    expect(result0.id).toBe(id0);

    let id1 = 'unknown-id';

    let id2 = 61770700;
    let result2 = data.results[2];
    expect(result2.id).toBe(id2);

    let result = getObservationsById(data, id0, id1, id2);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(2);
    expect(result[0]).toEqual(result0);
    expect(result[1]).toEqual(result2);
  });
});
