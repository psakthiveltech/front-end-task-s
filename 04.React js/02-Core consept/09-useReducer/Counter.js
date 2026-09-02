import React,{useState,useReducer} from 'react';

function calculator(state,action){
switch(action.type){
  case "ADD_VALUE":
    return state + 1;
  case "SUB_VALUE" :
    return state-1;
  case "RESET_VALUE" :
    return state=0;
  case "ADD_NUM" : 
  return state + action.payload;
  default : 
  return state;
}

}
function Counter() {
  const [state, dispatch] = useReducer(calculator,0)
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={()=>dispatch({type:"ADD_VALUE"})}>+</button>
      <button onClick={()=>dispatch({type:"SUB_VALUE"})}>-</button>
      <button onClick={()=>dispatch({type:"ADD_NUM",payload:5})}>+ five</button>
      <button onClick={()=>dispatch({type:"ADD_NUM",payload:10})}>+ ten</button>
      <button onClick={()=>dispatch({type:"ADD_NUM",payload:20})}>+ 20</button>
      <button onClick={()=>dispatch({type:"ADD_NUM",payload:30})}>+ 30</button>
      <button onClick={()=>dispatch({type:"ADD_NUM",payload:40})}>+ 40</button>
      <button onClick={()=>dispatch({type:"RESET_VALUE"})}>CLEAR ALL</button>
    </div>
  )
}

export default Counter  