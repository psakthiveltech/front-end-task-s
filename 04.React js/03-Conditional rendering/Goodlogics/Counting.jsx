import React, { useState } from 'react'
function Counting() {
  const [val,setval] = useState(0)
  return (
    <div>
      <h1>Message{val>0&& "'s " + val }</h1>
      <button onClick={()=> setval(i=>i+1)}>COunt</button>
    </div>
  )
}
export default Counting