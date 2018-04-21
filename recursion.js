
console.log('Hello, world!');

function sumIter(...nums) {
  var sum = 0;
  for(var i=0; i<nums.length; i++) {
    sum = sum + nums[i];
  }
  return sum;
}

sumIter(3,4,5,6,7,8,9);
console.log(sumIter(3,4,5,6,7,8,9));

//***********
function sumIter(sum,...nums) {
  for(var i=0; i<nums.length; i++) {
    sum = sum + nums[i];
  }
  return sum;
}

sumIter(3,4,5,6,7,8,10);
console.log(sumIter(3,4,5,6,7,8,10));

//***********
function sumIter(sum,...nums) {
  for(var i=0; i<nums.length; i++) {
    sum = sum + nums[i];
  }
  return sum;
}

let item1 = 3.34
let item2 = 2.99
let item3 = 4.05
let item4	= 3.66
sumIter(item1,item2,item3,item4);
console.log(sumIter(item1,item2,item3,item4));

//***********

function sumRecur(sum,...nums) {
  if (nums.length == 0) return sum;
  return sum + sumRecur(...nums);
}

sumRecur(3,4,5,6,7,8,11);
console.log(sumIter(3,4,5,6,7,8,11));
