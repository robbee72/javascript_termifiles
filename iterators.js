const teams = [
  'Minnesota Twins',
  'Chicago White Sox',
  'Detroit Tigers',
  'Kansas City Royals',
  'Cleveland Indians'
]

const iterator = teams[Symbol.iterator]()

const it1 = iterator.next();
console.log(it1);
const it2 = iterator.next();
console.log(it2);
const it3 = iterator.next();
console.log(it3);
const it4 = iterator.next();
console.log(it4);
const it5 = iterator.next();
console.log(it5);
const it6 = iterator.next();
console.log(it6);


for (const team of teams) {
  team Minnesota Twins, Chicago White Sox, Detroit Tigers, Kansas City Royals, Cleveland Indians
}

//
const iterable = {
    [Symbol.iterator](): iterator
}
