fetch("https://fakestoreapi.com/users")
.then((res)=>{
  return res.json();
})
.then((res)=>{
  console.log(res);
})
