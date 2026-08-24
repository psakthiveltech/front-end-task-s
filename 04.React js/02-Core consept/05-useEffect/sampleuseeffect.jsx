import React, { useEffect, useState } from 'react'

function Sampleuseeffect() {
  let [value,setvalue]=useState([])
  useEffect((res)=>{
    console.log(res)
    fetch('https://api.mydummyapi.com/users')
    .then(resse=>resse.json())
    .then(value=>setvalue(value))
  },[])
  return (
    <div>
      {value.map(user => (
      <h2 key={user.id}>{user.name}</h2>
    ))}
    </div>
  )
}

export default Sampleuseeffect;