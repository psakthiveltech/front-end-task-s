import React, { useState } from 'react'
function TypeEffect() {
  const [valueCurrent,changer] = useState('')
  const funchanger=(v)=>{
    changer(v.target.value)
    console.log(v);
    
  }
  return (<>
    <div>TypeEffect</div>
    <input type="text" onChange={funchanger} />
    <h4>{valueCurrent}</h4>
    </>
  )
}

export default TypeEffect;