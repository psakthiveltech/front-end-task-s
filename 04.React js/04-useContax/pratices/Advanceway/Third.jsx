import React from 'react'
import { useTheme } from './themecontast'

function Third() {
  let {theme} = useTheme()
  return (
    <div className={`third-${theme}`}>
      <h3>This is 3rd file</h3>
    </div>
  )
}

export default Third