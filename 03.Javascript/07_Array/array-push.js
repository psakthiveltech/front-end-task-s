let arr=['a','e','i','o','u']
let names = 'deepan'
let cons = []
for(vol of arr){
  for(item of names){
    if(vol === item){
    //  console.log(vol);
     cons.push(vol)
    }
  }
}
console.log(cons.length);