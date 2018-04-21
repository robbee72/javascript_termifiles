function Hello(name) {
// not available from the outside
  function speak() {
    console.log( name );
  }
// returning object from a function call public api
  return {
    say: speak
  };
}

var o = Hello("Fred");
o.say();

// "Fred"
// closes over
