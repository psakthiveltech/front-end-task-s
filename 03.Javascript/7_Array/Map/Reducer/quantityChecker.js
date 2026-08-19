const quantityChecker = [
  {name:"bike",quantity:1},
  {name:"bike",quantity:1},
  {name:"bike",quantity:1},
  {name:"bike",quantity:1},
  {name:"bike",quantity:1},
  {name:"bike",quantity:1},
  {name:"bike",quantity:1},
  {name:"bike",quantity:1},
  {name:"bike",quantity:1},
  {name:"bike",quantity:13},
  {name:"bike",quantity:1},
  {name:"bike",quantity:1},
  {name:"bike",quantity:125},
]

const quantityShower = quantityChecker.reduce((acc,item)=>acc + item.quantity,0)
let a = quantityChecker.length
console.log(quantityShower);
console.log(a);
