let heading = document.getElementById("hello")
let NewPromise =  new Promise((res,ress)=>{
  let ayappanisSP = true
  let hello = "hi"
  if(ayappanisSP){
    res("yes absolutly")
  }
  else{
    ress("yeah no")
  }
})
NewPromise
.then((result)=>{
  console.log(result)
})
.catch((yes)=>{
  console.log(yes)
})

let newone = new Promise((hello,hi)=>{
  let bookreading = true;
  if(bookreading){
    setTimeout(()=>{
      hello("yes")
      console.log("s iam the only one")
    },2000)
  }
  else{
    hi("no")
  }
})
console.log(newone)
newone
.then((res)=>{
  console.log(res)
})
.catch((resu)=>{
  console.log(resu)
})