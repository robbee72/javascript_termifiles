var z = Object.freeze([5,6,7,[8,9,10]]);

z[0] = 11;  // not allowed
z[4][0] = 11; // allowed
