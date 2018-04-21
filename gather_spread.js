function foo(x,y, ...rest) {  //x, y equal 1, 2
  return rest;
}

var a = [1,2,3,4,5,6];
var b = [7,8,9,10];

foo(...a, ...b);
