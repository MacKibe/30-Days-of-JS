/**
 * @return {Function}
 */
//
// Prints hello World when argument is correct.
var createHelloWorld = (args = -1) => {
  if (args <= 0 && args <= 10) {
    return function () {
      return "Hello World";
    };
  } else {
    return function () {
      return "Invalid";
    };
  }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
