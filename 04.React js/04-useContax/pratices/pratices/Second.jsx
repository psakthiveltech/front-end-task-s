import React, { useContext } from 'react'
import { Themechanger } from './Mainusecontaxt'

function Second() {
  let {values,setvalues}=useContext(Themechanger);
  return (
    <div className={values}>
      <h2>THis is second</h2>
    </div>
  )
}

export default Second