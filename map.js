const cars= [
  { model:'S-550' , make: 'Mercedes Benz'},
  { model:'Range Rover' , make: 'Land Rover'},
  { model:'F-150' , make: 'Ford'},
]

// map
const models = cars.map(function(car) {
    return car.model

// // for loop
// const models = []
// for(let i=0; i< cars.length; i++) {
//   models.push(cars[i].model)
// }


// map arrow function
//const models = cars.map((car) => { return car.model})

// or

const models = cars.map((car) =>  car.model)

console.log(models)
