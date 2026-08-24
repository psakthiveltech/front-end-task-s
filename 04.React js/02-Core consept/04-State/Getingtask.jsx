import React, { useState } from 'react'

function Getingtask() {
  let [a,b]=useState()
  function change(event){
    b(event.target.value)
  }
  function get(ab){
    ab.preventDefault();
    console.log(a);
    
  }
  return (
    <div>
      <form action="" onSubmit={get}>
      <input type="text" onChange={change}/>
      <button type='submit'>Click</button>
      </form>
      <h5>{a}</h5>
    </div>
  )
}

export default Getingtask