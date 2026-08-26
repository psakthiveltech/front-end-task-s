import React, { useRef, useState } from 'react'

function Stopswatch() {
  const [counter,setsounter] = useState(0)
  const [valtrue,setvaltrue] = useState(true)
  let values = useRef(null)

  let start = ()=>{
    const timer = setInterval(()=>{
      setsounter(e=>e++)
      values+=counter
    },1000)
  }
  let stoper=()=>{
    setvaltrue(false)
    clearInterval(timer)
  }
  return (
    <div>
      <p>{valtrue ? counter:valtrue}</p>
      <button onClick={start}>Start</button>
      <button onClick={stoper}>Stop</button>
    </div>
  )
}

export default Stopswatch