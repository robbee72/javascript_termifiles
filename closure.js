// two arrow functions
const addTo = (x) => {
  return (y) => {
    return x + y
  }
}

// nothing has been called
// set parameter to 5
var addToFive = addTo(5)

addToFive(3)
console.log(addToFive(3))



function outer (){
 let counter = 0;
 function incrementCounter (){
 counter ++;
 }

 return incrementCounter;
}


let myNewFunction = outer();
myNewFunction();
myNewFunction();

console.log(myNewFunction);

let anotherFunction = outer(); // myNewFunction = incrementCounter
anotherFunction();
console.log(anotherFunction);

anotherFunction();
console.log(anotherFunction);
console.log(myNewFunction);
