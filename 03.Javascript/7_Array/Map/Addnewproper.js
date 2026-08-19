let products = [
  {name: "Laptop", price: 50000},
  {name: "Phone", price: 20000},
  {name: "mobile", price: 2000},
  {name: "car", price: 120000},
  {name: "bike", price: 10000},
  {name: "headphone", price: 1000},
];
// let discounts = 0.10
// Expected output: 
// [
//   {name: "Laptop", price: 50000, discountPrice: 45000},
//   {name: "Phone", price: 20000, discountPrice: 18000}
// ]
// (10% discount)
// const values = products.map((values)=>{
//   return {
//      hello:values.name
//   }
// })
// console.log(values);
const vals = products.map((vall)=>
(vall.name==="car"?{...vall,price:"10L"} : vall))
console.log(vals);
