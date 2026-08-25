import React, { useState } from 'react'
import Gettask from './Gettask'

function Showtask() {
  let [task,addtask]= useState([])
  let addtasks = (text)=>{
    const newtask={id:Date.now(),text,Completed:false}
    addtask([...task ,newtask])
  }
  return (
    <div>
    <h1>Task center</h1>
    <Gettask addtasks={addtasks}/>
     
    <h3>task {`${task . length}`}</h3>
    </div>
  )
}

export default Showtask