const data = require('./data');
const { results } = data;
const { observationSummary, observationSummary2 } = require('./observations');

describe('Problem 01 Part 1 - observationSummary() function with for loop', function () {
  const originalLog = console.log;

  afterEach(() => {
    console.log = originalLog;
  });

  test('observationSummary() should call console.log() once per case', function () {
    let called = 0;
    const mockedLog = () => (called += 1);
    console.log = mockedLog;

    observationSummary(data);
    expect(called).toBe(results.length);
  });

  test('observationSummary() should log correct format of all cases', function () {
    let consoleOutput = [];
    const mockedLog = (output) => consoleOutput.push(output);
    console.log = mockedLog;

    observationSummary(data);

    consoleOutput.forEach((output) =>
      expect(output).toEqual(
        // We expect a string like "#67868131 - Muskrat (2021-01-10)"
        expect.stringMatching(/^#\d+ - .+ \(\d{4}-\d{2}-\d{2}\)$/i)
      )
    );
  });
});

describe('Problem 01 Part 2 - observationSummary2() function with for loop', function () {
  const originalLog = console.log;

  afterEach(() => {
    console.log = originalLog;
  });

  test('observationSummary2() should call console.log() once per case', function () {
    let called = 0;
    const mockedLog = () => (called += 1);
    console.log = mockedLog;

    observationSummary2(data);
    expect(called).toBe(results.length);
  });

  test('observationSummary2() should log correct format of all cases', function () {
    let consoleOutput = [];
    const mockedLog = (output) => consoleOutput.push(output);
    console.log = mockedLog;

    observationSummary2(data);

    consoleOutput.forEach((output) =>
      expect(output).toEqual(
        // We expect a string like "#67868131 - Muskrat (2021-01-10)"
        expect.stringMatching(/^#\d+ - .+ \(\d{4}-\d{2}-\d{2}\)$/i)
      )
    );
  });
});
