const name = "Fred";
const orderNumber = '1234';
const total = 29.97;

var msg = " Hello, " + name + ", your \
order ( #" + orderNumber + ") was $" + total + ".";
console.log(msg);
//'Hello, Fred, your order ( #1234) was $29.97.'

//template literals or interpolated string literal
var newMsg = ` Hello, ${name}, your
order ( #${orderNumber}) was $${total}.`;
console.log(newMsg);
//'Hello, Fred, your order ( #1234) was $29.97.'


// ******* //
// does not work
function foo(strings, ...values) {
  var str = "";
    for (var i=0; i<strings.length; i++) {
    str += strings[i];
  }
  return str;
}

var name = "Fred";
var orderNumber = '1234';
var total = 29.97;

var msg = foo`Hello, ${name}, your \
order ( #${orderNumber}) was $${total}.`;
console.log(msg);
