import React from 'react'
import { useTheme } from './themecontast'

function Second() {
  let {theme,toggle} = useTheme()
  return (
    <div className={`second-${theme}`}>
      <button className={theme} onClick={toggle}>Toogle</button>
      <h2>This is 2nd file</h2>
    </div>
  )
}

export default Second