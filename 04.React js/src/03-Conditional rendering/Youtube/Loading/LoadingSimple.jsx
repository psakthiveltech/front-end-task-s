import React, { useEffect, useState } from 'react'

function LoadingSimple() {
  const [val,setval]=useState(false)
  useEffect(()=>{
    setTimeout(()=>{
      setval(true)
    },3000)
  })
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height: "100vh"}}>
      <h1>{val? 'Welcome hi best':'loading⌛...'}</h1>
    </div>
  )
}

export default LoadingSimple