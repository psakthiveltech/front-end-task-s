import React, { createContext, useState } from 'react'
import './Mainusecontaxt.css'
import Second from './Second'
import Third from './Third'
 export let Themechanger=createContext()
function Mainusecontaxt() {
  let[values,setvalues]=useState('light')
  return (
    <Themechanger.Provider value={{values,setvalues}}>
    <div className={values}>
      <button onClick={()=>setvalues(values==="light"? 'dark':'light')}>toogle</button>
      <h1>this is header</h1>
    </div>
    <Second/>
    <Third/>
    </Themechanger.Provider>
  )
}

export default Mainusecontaxt