function printHello(){
  console.log("Hey");  // never displays because printHello is  variable is re-assigned.
}

setTimeout(printHello, 0);  // setTimeout runs 5th in order waiting for API

console.log("Me first!"); // 1st just a string


function printHello(){
  console.log("Hello, the second"); // is waiting for setTimeout to execute and last from callback on line 22.
};

function printHi(){
  console.log("Hi, the third"); // 3rd from call printHi line 24
};

function printHola(){
  console.log("Hola, the fourth");  // 4th  from call printHola line 25
};

setTimeout(printHello, 5000);  // setTimeout runs 6th in order
console.log("Dude, Me first!");  //2nd next string
printHi();
printHola();
