import React, { useState } from 'react'

function Switchcase() {
  let [count,setcount] = useState(0)

  function call(){
   switch(count){
  case 1:
  return <h1>1hello</h1>;
  case 2:
  return <h1>hello</h1>;
}}


  return (
    <div>
      <h1>{call()}</h1>
      <button className='btn btn-outline-info' onClick={()=>setcount((e)=>e+1)}>check value</button>
    </div>
  )
}

export default Switchcase