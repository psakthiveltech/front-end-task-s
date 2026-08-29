import React, { useState } from 'react'

function Getnameemail() {
  let [name,setname] = useState('')
  let [email,setemail] = useState('')

  function Onsubmits(event){
    event.preventDefault()
    console.log(name,email);
    setemail("");
    setname("")
    
  }
  return (
    <div>
      <form onSubmit={Onsubmits}>
        <input 
        type="text"
        onChange={(e)=>setname(e.target.value)}
        value={name}
        />
        <input type="email"
        onChange={eventpbject=>setemail(eventpbject.target.value)}
        value={email}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Getnameemail