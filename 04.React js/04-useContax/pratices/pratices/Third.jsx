import React, { useContext } from 'react'
import { Themechanger } from './Mainusecontaxt'

function Third() {
  let {values} = useContext(Themechanger)
  return (
    <div className={values}>
      <h3>This is third</h3>
    </div>
  )
}

export default Third