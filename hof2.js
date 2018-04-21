var cars= [
  { name:'S-550' , make: 'Mercedes Benz'},
  { name:'Range Rover' , make: 'Land Rover'},
  { name:'F-150' , make: 'Ford'},

]

var isMercedes = function( car ){
  return car.make ===  'Mercedes'
}

var mercedes = cars.filter(isMercedes)
//var otherCars = cars.reject(isMercedes)
