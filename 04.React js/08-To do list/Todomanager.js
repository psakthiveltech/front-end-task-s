import React, { useState } from 'react'
import './Todomanagerstyle.css'
function Todomanager() {
  const [work,setworks] = useState([])
  const [newwork,setnewwork] = useState("")

  function taketask(e){
   setnewwork(e.target.value)
  }

  function addvalues(){
    if(newwork.trim()==='') return;
    setworks([...work,newwork])
    setnewwork("")
  }
  return (
    <div>
      <input 
      type="text"
    onChange={taketask}
    value={newwork}

      />
      <button 
      className='btn btn-outline-primary'
      onClick={addvalues}
      
      >
        add
      </button>
    <h1>
      <ol>
        {
          work.map((w,index)=> <h1 className='liststyle' ><li key={index}>{w}</li></h1> )
        }
      </ol>
    </h1>
    </div>
  )
}

export default Todomanager