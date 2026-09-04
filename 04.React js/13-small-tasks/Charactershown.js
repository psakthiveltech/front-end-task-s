import React, { useState } from 'react'

function Charactershown() {
let [letters,setletters ] = useState("")
let [dis,setdis] = useState('')
  function displaycontent(){
    setdis(letters)
  }
  return (
    <div>
      <input 
      onChange={(e)=>setletters(e.target.value)}
      type="text"
      />
      <button onClick={displaycontent}>Show</button>
      <h2>{
        dis.length >20 ? dis.slice(0,20)+'...' : dis
      }</h2>
    </div>
  )
}

export default Charactershown