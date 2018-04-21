// errors out

function foo(){
  var a = 1;
  function bar () {
    var b = 2;
    function baz () {
      var c = 3;

      baz();
      console.log( a, b, c);
    }
    bar ();
    console.log( a, b );
  }
  foo();
  console.log(a);

};
