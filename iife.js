// Crockford's preference - parens on the inside
(function() {
  console.log('Example one works.');
}());

//The OPs example, parentheses on the outside
(function() {
  console.log('Example two works.');
})();

//Using the exclamation mark operator
//https://stackoverflow.com/a/5654929/1175496
!function() {
  console.log('Example three works.');
}();

// assigning foo LHS var to value of "foo"
var foo = "foo outside";
//IIFE which it scope is hidden. By Wrapping the entire function with ()
// then calling that function .....)(); the foo variable is hidden from line 26
// it is now an expression, not a declaration.
(function () {
  var foo = "foo2 inside";
  console.log(foo);
})();

// console.log is executed as though the IIFE did not exist.
console.log(foo);
