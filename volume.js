// volume on a sphere

// V = (4/3) * (r^3)
//
// example: r = 5
// V= 523.6

const pi = 3.14159265359       // declare const named pi with a value of 3.1459...
function cir (pi, radius) {    // cir is a function
	let total = ((pi * radius) *2);
  return total
}
let result = cir (pi ,5);      // declare let named result
console.log(result + " "+ "inches")
