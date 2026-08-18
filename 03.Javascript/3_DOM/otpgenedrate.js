

let nums = Math.floor(Math.random()*999999)+100000;
function genotp(){
nums = Math.floor(Math.random()*999999)+1000;

document.getElementById("txt").innerHTML = nums;
}
function  success(){
const name = document.getElementById("name");
const nameval = name.value;

const email = document.getElementById("email");
const emailval = email.value;

const mev = document.getElementById("otps");
const mevTwo = mev.value;

if((nums==mevTwo)&& ((isNaN(nameval)&&isNaN(emailval)))){

  document.getElementById("suxes").innerHTML = "<h1>Otp Sended Successfully ✅</h1>"
}
else{
 
  document.getElementById("suxes").innerHTML = "<h2>Fill The Form ⚠️</h2>"
}

}

const card = document.getElementById("card")
document.getElementById("hone").onclick = function(){
  card.style.display = "none"
}