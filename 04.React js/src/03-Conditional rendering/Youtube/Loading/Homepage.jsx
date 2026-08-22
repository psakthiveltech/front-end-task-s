import React, { useEffect, useState } from 'react'
import Loadingpage from './Loadingpage'

function Homepage() {
  const [val,seval]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      seval(false)
    },1000)
  })
  return (
<div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100vh'}}>
  {
    val ? <Loadingpage/> :<h1>Welcome <span style={{color:'red'}}>buddy</span>  for this</h1>
  }

</div>
  )
}

export default Homepage