import React, { useState } from 'react'

function Stateex() {
  let [changingValue,changerFunction]=useState(0)
  let counter = ()=> {
    changerFunction(changingValue+100)
    console.log('this code run again...');
    
  }
  return (<><h1>Counter</h1>
    <h3> count is {changingValue}</h3>
    <button onClick={counter}>count add</button>
    </>
    

  )
}

export default Stateex