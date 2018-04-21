function userCreator (name, score) {
  let newUser = Object.create(userFunctionStore);   //declaring a newUser with let and assigning and Object.create with _ _ proto _ _ of userFunctionStore); 
  newUser.name = name;
  newUser.score = score;
  return newUser;
};

let userFunctionStore = {
  increment: function(){this.score++;},
  login: function(){console.log("You're loggedin");}
};

let user1 = userCreator("Will", 3);
let user2 = userCreator("Tim", 5);

user1.increment();



/*
Gobal memory

userCreator:     function  from line 1


userFunctionStore: {        from line 8
  increment:    function    from line 9
  login:        function    from line 10
} object: note the curly brackets


user1:  _ _ _ _   from line 13 undefined until execution context returns a value.
user2:  _ _ _ _   from line 14 undefined until execution context returns a value.

*/

/*
execution context
        ... in valuable environment

user1 = userCreator( 'Will', 3 ) parameters from lines 13 and 14

local memory

  name: 'Will'    // parameter: property
  score: 3        // parameter: property
  newUser: {
    ... empty ... ,
    _ _ proto _ _   // only runs in javascript engine
  }  // reference or bond userFunctionStore

  GOTO RETURN USER1


Lefthand side

newUser= Object.create
    (userFunctionStore)
    {


  }

*/
/*
  GOTO RETURN USER1
  after the return
Here there is a bond/ connection to userFunctionStore.
where a new execution context is created for

user1.increment()
local memory

this:   // a value whatever is left of the . dot

Lefthand side

  this.score++

*/
