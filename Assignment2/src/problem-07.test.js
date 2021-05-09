const data = require('./data');
const result0 = data.results[0];
const result1 = data.results[1];
const { getUserStats } = require('./observations');

describe('Problem 07 - getUserStats() function', function () {
  let sample, samples, sampleData;

  beforeEach(() => {
    sample = Object.assign({}, result0);
    samples = [sample];
    sampleData = { results: samples };
  });

  test('should return an Object with the right properties', function () {
    let result = getUserStats(sampleData);
    expect(typeof result === 'object').toBe(true);
    expect(typeof result.count === 'number').toBe(true);
    expect(typeof result.totals === 'object').toBe(true);
    expect(typeof result.totals.observations === 'number').toBe(true);
    expect(typeof result.totals.identifications === 'number').toBe(true);
    expect(typeof result.totals.species === 'number').toBe(true);
    expect(typeof result.averages === 'object').toBe(true);
    expect(typeof result.averages.observations === 'number').toBe(true);
    expect(typeof result.averages.identifications === 'number').toBe(true);
    expect(typeof result.averages.species === 'number').toBe(true);
  });

  test('should return an Object with correct count properties', function () {
    let result = getUserStats(sampleData);
    expect(result.count).toBe(samples.length);

    samples = [sample, sample, sample];
    let result2 = getUserStats({ results: samples });
    expect(result2.count).toBe(samples.length);
  });

  test('should return an Object with correct totals', function () {
    samples = [sample, sample, sample];
    let result = getUserStats({ results: samples });
    expect(result.count).toBe(samples.length);
    expect(result.totals.observations).toBe(96);
    expect(result.totals.identifications).toBe(351);
    expect(result.totals.species).toBe(66);
  });

  test('should return an Object with correct averages', function () {
    samples = [result0, result1];
    let result = getUserStats({ results: samples });
    expect(result.count).toBe(samples.length);
    expect(result.averages.observations).toBe(76.5);
    expect(result.averages.identifications).toBe(58.5);
    expect(result.averages.species).toBe(55);
  });

  test('real-data should produce the expected stats Object', function () {
    let result = getUserStats(data);
    expect(result).toEqual({
      averages: { identifications: 11.7, observations: 48.6, species: 36.3 },
      count: 10,
      totals: { identifications: 117, observations: 486, species: 363 }
    });
  });
});
