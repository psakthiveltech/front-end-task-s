import React, { useRef } from 'react'

function Takevalue() {
  console.log(`run component takevalue`);
  
    let val = useRef(null)
    let toggle = ()=>{
      console.log(val.current.value);
      val.current.style.backgroundColor = "red"
    }
  return (
    <div>

    <input ref={val} type="text" placeholder='name..'/>
    <button onClick={toggle}>click</button>
    
    </div>
  )
}

export default Takevalue