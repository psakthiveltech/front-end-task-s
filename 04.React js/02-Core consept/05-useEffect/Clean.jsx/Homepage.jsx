import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

function Homepage() {
  let [a,b]=useState(0)
  useEffect(()=>{
    let timer = setInterval(()=>{
      b((e)=>e+1)
    },1000)

    return ()=>{
      clearInterval(timer)
      b(a=0)
    }
  },[])
  return (
    <div>
      <h1>cout {a}</h1>
      <ul>
       <Link to='/' >home</Link>
       l
       <Link to='/About' >about</Link>
      </ul>
    </div>
  )
}

export default Homepage