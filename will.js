// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
// Challenge 1
// const Variable of num is assigned to 3
// LHS - variable RHS - value
const num = 3;

// Declaring function of addTwo with parameter of inputNumber
// the block of the function is everything bewteen { }.
function addTwo(inputNumber) {
  // const Variable result assigns the statement inputNumber + the value number of 2
 const result = inputNumber + 2;
 // the Variable is returned and that data is storaged
 // it has not been called, just hanging there.
 return result;

}

// end of the block. Implicit return finishes the execution.

// console.log displays the called function of addTwo(4) in global memory.
console.log(addTwo(4));


// console.log displays the called function of addTwo(4) in global memory.
// the function addTwo is run again, this time with (10)
console.log(addTwo(10));


// Challenge 2
const word = "fish";
function addS(word) {
  const addS = "s";
  let pural = word+addS;
  return pural;

}

 console.log(addS('trout'));
 console.log(addS('walleye'));


// Challenge 3

function map(array, callback) {
  let answer = []
  for (let i = 0; i < array.length; i++)  {
		answer.push(array[i] * 2)
  }
 	return answer
}

 console.log(map([1, 2, 3], addTwo));


// function copyArrayAndDivideBy2(array) {
//  let output = [];
//  for (let i = 0; i < array.length; i++) {
//  output.push(array[i] /2);
//  }
//  return output;
// }
// const myArray = [1,2,3]
// let result = copyArrayAndDivideBy2(myArray);
// console.log(result)


function copyArrayAndManipulate(array, instructions) {
 let output = [];
 for (let i = 0; i < array.length; i++) {
 output.push(instructions(array[i]));
 }
 return output;
}
function multiplyBy2(input) {
 return input * 2;
}


let result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);

console.log(result)



// Challenge 4
function forEach(array, callback) {

}

// see for yourself if your forEach works!


//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {

}

//Extension 2
function reduce(array, callback, initialValue) {

}

//Extension 3
function intersection(arrays) {

}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(arrays) {

}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {

}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {

}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
