try{
let a = prompt('Enter a value')
if(isNaN (a))
  throw "ENTER CORRECT NUMBER"
if(a==="")
  throw "it connot be empty"
document.getElementById("dis").innerHTML = (b* 2)
}
catch(error){
document.getElementById("dis").innerHTML = "this is an expection eror"
}