const orders = [
  { amount: 250 },
  { amount: 100 },
  { amount: 400 },
  { amount: 325 },
  { amount: 200 },
]

const totalAmount = orders.reduce(function(sum, order) {
  console.log("item", sum, order)
  return sum + order.amount
}, 0)


console.log(totalAmount)
