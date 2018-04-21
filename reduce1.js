var fs = require('fs')
//import fs from "fs"

var output = fs.readFileSync('data.txt', 'utf8')
  .trim()
  .split('\n')
  .map(line => line.split('\t'))
  .reduce((customers, line) => {
    customers[line[0]] = customers[line[0]] || []
    customers[line[0]].push({
      name: line[1],
      price: line[2],
      quantity: line[3]
    })
    return customers
  }, {})

console.log('output', JSON.stringify(output, null, 2))




//
//
//
//
//
//
// {
//   'Fred Coors': [
//     { name:'S-550',      price: '132,000', year: '2014'},
//     { name:'Range Rover', price: '144,000', year: '2016'},
//     { name:'F-150',       price: '52,000', year: '2018'},
//   ],
//   {
//     'Mary Coors': [
//       { name:'Accord',      price: '32,000', year: '2013'},
//       { name:'A 6',         price: '64,000', year: '2018'},
//       { name:'Wranger',       price: '22,000', year: '17000'},
//     ]
// }
