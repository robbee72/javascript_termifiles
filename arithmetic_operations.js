function arithmetic(array, operations) {
  const answer = [];
  for( let i = 0; i < array.length; i++) {
    answer.push(operations(array[i]));
  }
  return answer;
}

function multiplyBy10(input) {
  return input * 10;
}

const result = arithmetic([1, 2, 3, 4], multiplyBy10);
console.log(result);

// naming your function

var simplyMath = function arithmetic(array, operations) {
  const answer = [];
  for( let i = 0; i < array.length; i++) {
    answer.push(operations(array[i]));
  }
  return answer;
}

function multiplyBy10(input) {
  return input * 10;
}

const result = simplyMath([1, 2, 3, 4], multiplyBy10);
console.log(result);
