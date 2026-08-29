import React, { useState } from 'react'

function Stateoverrighteobj() {
  const [user,setuser] = useState([
    { id: 1, active: false },
  { id: 2, active: false }
  ])

function Changeuseractive(){
  setuser((items)=>{
  return  items.map((it)=>{
      if(it.id===1){
        return {...it,active:true}
      }
      return it
    })
  })
}

  return (
    <div>
      <h1>
        {
          user.map((items)=>(
            <h1>{items.active===false?"false":"true"}</h1>
          ))
        }
      </h1>
      <button onClick={Changeuseractive}>Active</button>
    </div>
  )
}

export default Stateoverrighteobj