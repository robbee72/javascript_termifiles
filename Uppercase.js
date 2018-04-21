function Hello(name) {

  function upper(str) {
    return str.toUpperCase();
  }

  function speak(last_name) {
    console.log( upper(name), last_name);
  }

  var public_api = {
    say: speak
  };

  return public_api;
}

var o = Hello("Fred");
o.say("Coors");   // FRED Coors
