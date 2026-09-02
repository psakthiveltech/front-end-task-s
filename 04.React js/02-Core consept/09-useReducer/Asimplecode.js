import React, { useReducer, useState } from 'react'

function addFunction(state,action){
  switch(action.type){
    case "INC_MENT" :
      return state+1
      case "DEC_MENT" :
        return state<1? state : state-1
        case "ADS":
          return state + action.payload;
          case "DS" :
             return state=0
  }
   
}

function Asimplecode() {
  let [trues,setrues] = useState(false)
  let [state,dispatch]=useReducer(addFunction,0)
  function HandleTruefalse(){
    setrues((t)=>t? false : true)
  }
  return (
    <div>
      <button className='btn btn' style={{backgroundColor: trues? 'gray' :'black',color:'white'}} onClick={HandleTruefalse}>{
        trues? "Subscribed ✅" : "Subscribe"
        }</button>
        <h1>Count :{trues? 1 :0}</h1>
        <button onClick={()=>dispatch({type:"INC_MENT"})}>+</button>
        <button onClick={()=>dispatch({type:"DEC_MENT"})}>_</button>
        <button onClick={()=>dispatch({type:"ADS",payload:10})}>+10</button>
        <button onClick={()=>dispatch({type:"ADS",payload:20})}>+20</button>
        <button onClick={()=>dispatch({type:"ADS",payload:30})}>+30</button>
        <button onClick={()=>dispatch({type:"ADS",payload:40})}>+40</button>
        <button onClick={()=>dispatch({type:"ADS",payload:50})}>+50</button>
        <button onClick={()=>dispatch({type:"DS",payload:0})}>Reset</button>
        <h3>{console.log(state)}</h3>
        <h4>{state}</h4>
    </div>
  )
}

export default Asimplecode