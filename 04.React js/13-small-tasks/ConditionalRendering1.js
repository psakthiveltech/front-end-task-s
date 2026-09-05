import React, { useState } from 'react'

function ConditionalRendering1() {
  const [vals,setvals] = useState(false);
  function checktf(){
    vals? setvals(false) : setvals(true);
    console.log(vals);
    
  }
  return (
    <div>
      <button onClick={checktf}>{vals?"Log out ? ": "Login ?" } </button>
    </div>
  )
}

export default ConditionalRendering1