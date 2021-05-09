/**
 * Welcome to the Problem 0 Unit Tests! The problem test files are code that
 * has already been written for you, you don't need to do anything
 * in them except read what's here.  They include tests for the assignment's
 * functions, and will help you know if your coding is working or not.
 *
 * A Unit Test is a piece of code that tests a "unit" of code, for example, a
 * function. We call them Unit Tests, because we try to have our tests test the
 * smallest possible unit of code that we can.
 *
 * These tests have been written using a Testing Framework called Jest.
 * Jest was created by Facebook, and helps developers write code with
 * fewer bugs. You can read more about it at https://jestjs.io/
 *
 * Each of the problems that you need to solve in src/solutions.js
 * has an associated file with unit tests, Problem 1's tests are in
 * the file problem-01.test.js, and so on. These tests define the
 * expected behaviour of your code.  If you write your tests correctly,
 * all the tests should PASS.  If you make a mistake, one or more of them
 * will FAIL.
 *
 * Your goal is get all of the tests in this assignment to PASS.
 * It's like a video game, except instead of using a gamepad, you'll be writing
 * JavaScript!
 *
 * Some of what these tests do is more complex than what you know how to
 * do yourself at this point.  Don't worry about that.  Remember, you don't
 * have to write the tests, only get your code to pass.
 *
 * To help you, we'll document and explain everything in this file as we go.
 * This first line is getting the `greeting` function from the file solutions.js.
 * Don't worry about this for the moment, but if you're curious, you can read more
 * at https://nodejs.org/en/knowledge/getting-started/what-is-require/
 */
const { greeting } = require('./solutions');

/**
 * Next, we use one of Jest's functions called describe().  It allows
 * us to describe our tests for a particular feature, and give them a name.
 * Doing so makes it a bit easier to see what's going on when we run our tests.
 * We also define a function() {...} to contain our tests.  When the Problem 0
 * tests are run, this function will be called.
 */
describe('Problem 0 - greeting() function', function () {
  /**
   * Now we come to the individual tests.  We try to keep our tests
   * small, and only test 1 thing at a time.  This makes it easier to implement
   * our code and slowly make progress.  You can write a bit of the functionality,
   * and get some of the tests to pass.  As you add more, and deal with new cases,
   * more of the tests should pass.  You also want to avoid having passing tests
   * suddenly start failing--meaning you've introduced a bug.
   *
   * Our first test makes sure that the variable named `greeting` is really
   * a function.  We're using Jest's expect() function, which let's us
   * compare an actual value (something returned by running our code) to an
   * expected value (something we define in advance in our test).  You don't need
   * to spend too much time on this, but if you're interested, you can read more
   * about expect() at https://jestjs.io/docs/en/expect.
   */
  test('greeting should be a function', function () {
    // This is like saying: if(typeof greeting === 'function')
    expect(typeof greeting).toBe('function');
  });

  /**
   * Our final test for greeting() checks to make sure that if you pass in
   * a name (i.e., a String), that it returns a new String formatted in the right way.
   */
  test('greeting should return the correct string output', function () {
    let result = greeting('WEB222 Student');
    expect(result).toBe('Hello WEB222 Student!');
  });

  /**
   * OK, now you're ready to go back to src/solutions.js and continue solving
   * Problem 1.
   */
});
