"use strict";

const batman = "Bruce Wayne"  // this is outside the capedCrusader function
//____________________//
function capedCrusader() {
  console.log("I am " + " " + batman )  // the lexical scope of batman variable is outside the function.
}

const maskedMan = capedCrusader();
console.log(maskedMan);
