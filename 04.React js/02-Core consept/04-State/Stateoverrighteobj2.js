import React, { useState } from 'react'

function Stateoverrighteobj2() {
  const [values,setvalues]= useState(
    [
  { id: 1, name: "Pen", price: 10, inStock: false },
  { id: 2, name: "Book", price: 50, inStock: false },
  { id: 3, name: "Bag", price: 500, inStock: false }
]
  )
  function Handlestock(){
    setvalues((val)=>(
      val.map((val)=>{
        if(val.id===2){
          return {...val,inStock:true}
        }
        return val
      })
    ))
  }
  return (
    <div>{
values.map((values)=>{
  return <div>
    <h1>{values.name}</h1>
    <h1>{values.price}</h1>
    <h1>{values.inStock? "true" : "false"}</h1>
  </div>
})      
      }
      <button onClick={Handlestock}>click</button>
      </div>
  )
}

export default Stateoverrighteobj2