function randomsell(){
  const newprom = new Promise((res,rej)=>{
    let random = Math.random()
    res(random>0.4 ? res("this id true"):rej("reject"))
  },600)
  newprom
.then((e)=>console.log(e))
.catch((s)=>console.log(s))
}


