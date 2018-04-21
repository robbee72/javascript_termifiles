
var scope = "I am global";
function whatismyscope(){
   var scope = "I am just a local";
   function func() {
     return scope;
   }
   return func;
}

whatismyscope()()

// The above code will return "I am just a local". It will not return "I am a global". Because the function func() counts where is was originally defined which is under the scope of function whatismyscope.
//
// It will not bother from whatever it is being called(the global scope/from within another function even), that's why global scope value I am global will not be printed.
console.log(whatismyscope()());
