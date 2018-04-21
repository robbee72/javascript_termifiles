// unary
function increment(x) {
  return sum(x,1);
}

// binary
function sum(x, y) {
  return x + y;
}

// farther args

function unary(fn) {
  return function one(arg){
    return fn(arg);
  };
}

function binary(fn) {
  return function two(arg1, arg2){
    return fn(arg1, arg2);
  };
}
function more(fn) {
  return function four(arg1, arg2, arg3, arg4){
    return fn(arg1, arg2, arg3, arg4);
  };
}

function reverseArgs(fn) {
  return function reversed(...args){
    return fn(...args.reverse());
  };
}

function f(...args){
  console.log(args);
}

var g = unary(f);
var h = binary(f);
var m = more(f);
var r = reverseArgs(f);

g(1,2,3,4);
h(1,2,3,4);
m(1,2,3,4);
r(1,2,3,4);
