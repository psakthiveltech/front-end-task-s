let obj ={
  bestname:"hari",
  age:"12",
  number:9874563210
}

console.log(obj.age);

// let {bestname}=obj
// console.log(bestname);

function fun ({bestname}){
  console.log(bestname);
  
}
fun(obj)