let someArray = [
  {name: 'Fred', scores: "72, 68, 66, 71"},
  {name: 'Jill', scores: "71, 69, 69, 71"},
  {name: 'Peter', scores: "65, 68, 69, 70"}

];


// //1
// let f1 = someArray.shift(); // first element removed
// console.log(f1);
// //2
// let f2 = someArray = someArray.slice(1); // first element removed
// console.log(f2);
// //3
let f3 = someArray.splice(0,3); // first element removed
console.log(f3);
//4
// let f4 = someArray.pop(); // last element removed
// console.log(f4);
