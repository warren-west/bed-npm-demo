const mathFunctions = require('./myMathFunctions')
const isEven = require( '@stdlib/math-base-assert-is-even' )

console.log(mathFunctions.addTwoNumbers(10, 15))
console.log(mathFunctions.squareNumber(mathFunctions.myFavNumber))

console.log(isEven(5))
console.log(isEven(20))

// npm init --y
// npm i <the-unique-package-name>
// npm uninstall <the-unique-package-name>