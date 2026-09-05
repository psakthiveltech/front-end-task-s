import { useState } from "react";

function Basiccount(){
  const [val,setval] = useState(0);
function adder(){
  console.log(val);
 setval(val+1)
}
function suber(){
  if (val>0){
 return  setval(val-1);
  }
  else{
  alert("exite minimum value");
  }
}
function xtwo(){
  setval(val*2);
}
function zero(){
  setval(0);
}
return<>
<button onClick={adder}>+</button>
<button onClick={suber}>-</button>
<button onClick={xtwo}>X 2</button>
<button onClick={zero}>Reset</button>
<h1>Count : {val}</h1>
</>
}
export default Basiccount;