function Car(made, models) {
  this.made = made;
  this.models = models;
  this.logInfo = function() {
    console.log(this === myCar); // => true
    console.log('My ' + this.made + ' is a ' + this.models + ' SUV');
  }
}
var myCar = new Car('car', "Range Rover, Autobiography");

setTimeout(myCar.logInfo.bind(myCar), 1000);
