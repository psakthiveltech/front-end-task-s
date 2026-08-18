const container = document.getElementById("container")
container.style.display = "flex"
container.style.justifyContent = "center"
container.style.alignItems = "center"
container.style.height = "100vh"


const card = document.getElementById("card")
card.style.height = "60vh";
card.style.width = "400px"
card.style.boxShadow = "10px 10px 10px 0.17px rgba(0,0,0,1.17)"
card.onmouseover = function(){
  card.style.color = "green";
  card.style.borderRadius = "60%"
}
card.onmouseleave = function(){
  card.style.color = "green";
  card.style.borderRadius = "0px"
  
}

card.onclick = function(){
  card.style.backgroundColor = "red";
}

const close = document.getElementById("closeTag")
 close.style.backgroundColor = "blue"
 close.onclick = function(){
  card.style.display = "none"
}