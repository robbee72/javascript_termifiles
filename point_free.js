// point free

foo(function(v){
  return bar(v);
});

foo(bar);

//
function isOdd(v) {
  return v % 2 == 1;
}

function isEven(v) {
  return !isOdd(v);
}

isEven(3);
console.log(isEven(3));

isEven(4);
console.log(isEven(4));

isOdd(5);
console.log(isOdd(5));

isOdd(6);
console.log(isOdd(6));
