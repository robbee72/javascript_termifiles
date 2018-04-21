a = (100 + 1.0/3) - 100;
b = 1.0/3;

a == b   // false

//Why operator precedence 20 Grouping ()
// for the variable a
// 100 + 1.0/3
// 100.33333333333333
// 100.33333333333333 - 100
// 0.3333333333333286 rounding issue in binary
// for the variable b
// 1.0/3
// 0.33333333333333
// from the boolean a == b comparison number
// 0.3333333333333286 == 0.33333333333333 returns false
