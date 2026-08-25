import React, { useState } from 'react'
function Gettask({addtasks}) {
let [val,setval]= useState()
let adding = (event)=>setval(event.target.value)
  const datareceiver = (event)=>{
    event.preventDefault();
    if(val.trim()){
  console.log(`Data Received ${val.trim()}`);
  addtasks(val)
  setval('')   
    }
  }
  return (
    <div>
      <form action="" onSubmit={datareceiver}>
        <input 
        type="text"
        onChange={adding}
        value={val}
        />
        <button>Add</button>
      </form>
    </div>
  )
}

export default Gettask