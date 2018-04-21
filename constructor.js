class Bottle {  // Bottle is capitalized because it is a class

  constructor(id) {
    this.id = id;
  }
  alert() {
    console.log( this.id );
  }
}
var input = prompt("What's your favortie beer?");
var minneapolisMicroBrewery = input;

console.log(minneapolisMicroBrewery);


//_________________//

class Bottle {  // Bottle is capitalized because it is a class

  constructor(id) {
    this.id = id;
  }
  alert() {
    console.log( this.id );
  }
}

var minneapolisMicroBrewery = new Bottle("Root Beer");

minneapolisMicroBrewery.alert();
