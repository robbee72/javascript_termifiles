// The process of converting a function that takes multiple arguments into a function that takes them one at a time.

//Each time the function is called it only accepts one argument and returns a function that takes one argument until all arguments are passed.

let car =
  make =>
    model =>
      trim =>
			'The ' +
      make + ' ' +
      model + ' super car' + ', hard top ' +
      trim + '.'

      console.log (car('Ferrari')('488')('GTB'))







const sum = (a, b) => a + b

const curriedSum = (a) => (b) => a + b

curriedSum(40)(2) // 42.

const add2 = curriedSum(2) // (b) => 2 + b

add2(10)

console.log(add2(10))  // 12
