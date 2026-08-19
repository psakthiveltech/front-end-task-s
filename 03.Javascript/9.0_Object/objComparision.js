let a = {
  name:'sam',
  age:12,
  vehical:'Bike'
}
let b = a;
a.vehical='van';
console.log(b===a);
let c={
  ...b,
  age:10
}
c.car="lambo"
console.log(c);