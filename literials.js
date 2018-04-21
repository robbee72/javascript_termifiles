console.log('Hello, world!');

typeof foo;
console.log(typeof foo); // undefined

typeof "foo";
console.log(typeof "foo"); // string

typeof 123;
console.log(typeof 123);  // number

typeof true;
console.log(typeof true); // boolean

typeof {a: 10};
console.log(typeof {a: 10}); // object

typeof function() {alert(e); };
console.log(typeof function() {alert(e); }); // function

typeof null;
console.log(typeof null);  //object

typeof [1, 2, 3.14];
console.log(typeof [1, 2, 3.14]);  //object
