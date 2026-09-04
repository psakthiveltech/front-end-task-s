import React, { useState } from 'react'

function Aarrayofobjectsearch() {
  let [val,setval]=useState('')
  let objarr=[
      {name:'solderman',height:"7feet 2inch"},
      {name:'spiderman',height:"7feet 2inch"},
      {name:'ironman',height:"7feet 2inch"},
      {name:'heman',height:"7feet 2inch"},
      {name:'batman',height:"7feet 2inch"}
  ]
  let filters = objarr.filter((item)=>{
    return item.name.toLowerCase().includes(val.toLowerCase())
  })
  return (    
    <div>
      <input 
      type="text"
      onChange={(r)=>setval(r.target.value)}
      />     
      {
        filters.map((s)=>{
         return <h1>{s.name}</h1>
         
         
        })
      }
      {
        console.log(filters)
      }
    </div>
  )
}

export default Aarrayofobjectsearch;