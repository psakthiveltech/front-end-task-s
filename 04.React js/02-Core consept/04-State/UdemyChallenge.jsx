import React, { useState } from 'react'

function UdemyChallenge() {
  const [values,setvalues] = useState('')
  const [inputvaue,setinvalues] = useState('')
  return (
    <div>{
      console.log(values,inputvaue)
      
      }
      <h1>Hello{inputvaue}</h1>
      <form onSubmit={(e)=>{setinvalues(values)}}>
      <input 
      type="text"
      onChange={e=>setvalues(e.target.value)}
      />
      <button 
      >Show here</button>
      </form>
    </div>
  )
}

export default UdemyChallenge