/**
 * There are 7 data types in JS.
 *
 * Primitives:
 * String
 * Number
 * Boolean - true / false
 * Undefined - calling a reference that doesn't exist lack of definition
 * Null - explicitly declaring a lack of value
 *
 * Other:
 * Objects - JS is object oriented, so we'll be working with lots of objects
 * Symbols - newer to the language; not commonly used
 *
 * You can use the typeof() operator to see what kind of value you are working with
 *
 * We can convert strings to numbers using parseInt() or the unary operator +someString
 *
 * We can convert other data types to strings by using .toString()
 */

 console.log(typeof('Ben')); // --> string
 console.log(typeof(42)); // --> number
 console.log(typeof(true)); // --> boolean
 console.log(typeof(Symbol())); // --> symbol

 console.log(parseInt('1')); // -> 1 (as a number via parseInt)
 console.log(+('1')); // -> 1 (as a number via unary operator)
 console.log((1).toString()); // -> "1" (as a string)

/**
 * We can combine strings in 2 ways also called concatenation.
 *
 * Old way:
 */

 const favoriteMovie = 'The Godfather';
 console.log('Your favorite movie is: ' + favoriteMovie + '.'); // --> "Your favorite movie is: The Godfather."

 /**
  * New and improved way using backticks. This is called a template literal.
  *
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
  *
  * We will be doing things this way:
  */

const secondFavoriteMovie = "Empire Strikes Back";
console.log(`Your second favorite movie is: ${secondFavoriteMovie}.`); // --> "Your second favorite movie is: Empire Strikes Back."

/**
 * A block of code in JS is typically defined by the curly braces { }
 *
 * You can thing of this as just pieces of code that are grouped together
 *
 * This also creates something we'll call scope
 *
 * var, let, and const are all ways of declaring variables, but they act differently
 *
 * Make sure you read the MDN article for each:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
 *
 * We will use const primarily, let if we need to reassign a variable, and we won't use var
 */

/**
 * If you look in our class repository you will see lots of examples of
 * built in JavaScript objects. For example, the Date object.
 *
 * You can create a new Date object by using the new keyword.
 *
 * We'll continue to see and use lots of JS objects throughout the course.
 */

 const currentDateAndTime = new Date();
 console.log(currentDateAndTime); // -> Returns current date and time

 /**
  * alert(), confirm(), and prompt() are built into JS and are examples of functions.
  *
  * We'll talk alot about functions in this class. You can think of them as tiny
  * machines that can take something in (called arguments), do something to it, and return some value out of it
  *
  * You CALL functions, functions RETURN value.
  *
  * Alerts take in a string and inform the user of something.
  *
  * Confirms take in a string and will return a boolean (true/false) response.
  *
  * Prompts will ask the user for something. And always return a string.
  *
  * Use these to do your takehome.
  */