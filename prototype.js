function userCreator(name, score){
  this.name = name;
  this.score = score;
}

userCreator.prototype.increment = function(){
  this.score++;
};
userCreator.prototype.login = function(){
  console.log("login");
};

let user1 = new userCreator(“Fred”, 9)   // new is a keyword

user1.increment();


// let user1 = {
//   name: 'Fred',
//   scoreRoundOne: 72,
//   increment: function() {
//     user1.scoreRoundOne++;
//
//   }
// };
// user1.increment();
//
// console.log(user1.increment());
