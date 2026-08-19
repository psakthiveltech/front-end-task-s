let arrayys = []
let anumbers = [1,2,3,4,5,6,7,8,9]
anumbers.forEach((item)=>{
  if(item%2===1){
    arrayys.push(item)
    console.log(item);
    
  }
})
console.log(arrayys)
//
let movie = ['avatar','leo','jailer','spider-man']
let namesOf = []

movie.forEach((names)=>{
  if(names.length>5){
    namesOf.push(names)
  }
})
console.log(namesOf);

function namechecker(names){
let lengthandcount = []
let nameofsomeone = 'vinayagar'
for(chars of nameofsomeone){
  if(chars===names){
    lengthandcount.push(chars)
  }
  else{
  }
}
console.log(lengthandcount.length);
}
namechecker('a')
