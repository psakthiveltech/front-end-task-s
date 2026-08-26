import React from 'react'
import { useTheme } from './themecontast'

function Fourth() {
  let {theme} = useTheme()
  return (
    <div className={`fourth-${theme}`}>
      <h4>this is fourth</h4>
    </div>
  )
}

export default Fourth