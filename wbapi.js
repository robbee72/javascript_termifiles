function printHello(){
 console.log('Hello');
}

function blockFor1Sec(){

}
setTimeout(printHello, 0);
blockFor1Sec()
console.log('Me first!');
console.log('Me second!');
console.log('Me third!');
console.log('Me fourth!');

// returns the following
// $ node wbapi.js
// Me first!
// Me second!
// Me third!
// Me fourth!
// Hello
