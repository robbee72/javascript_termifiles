// when a function calls itself until it does not.


let countDownFrom = (num) => {
  if (num === 0) return;
  console.log(num)
  countDownFrom(num -1)
}

countDownFrom(60)
