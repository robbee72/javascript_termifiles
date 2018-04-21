function foo() {
  return [1,2,3];
}

var tmp = foo();
var a = tmp[0];
var b = tmp[1];
var c = tmp[2];

// or

function foo() {
  return ["Fred","A.","Coors"]
}

var [a, b, c] foo();
