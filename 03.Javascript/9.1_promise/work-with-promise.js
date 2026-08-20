let newpro = new Promise((a,b)=>{
  let aryanNOtRatchasan = true
  if(aryanNOtRatchasan){
    a("s this is tru")
  }
  else{
    b("s this is false")
  }
})
newpro
.then((res)=>{
  console.log(res)
})
.catch((res)=>{
  console.log(res)
})
console.log(newpro)

let a = new Promise((res,rej)=>{
  setTimeout(() => {
    res("yeah...")
  }, 2000);
})
a.then((res)=>{
  console.log(res)
})
console.log(a)

let soen = new Promise((res,rej)=>{
  alert("Do You Want To Download ?")
  setTimeout(() => {
    res("Downloade completed")
  }, 3000);
})
soen
.then((res)=>{
  alert(res)
})