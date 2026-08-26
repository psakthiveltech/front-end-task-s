import React, { createContext, useContext, useState } from 'react'
import './themecontast.css'
export let Themechang = createContext()
function Themecontast({children}) {
  let [theme,settheme]=useState('light')
  let toggle = ()=>settheme(theme==='light'?'dark':'light')
  let values = {
    theme:theme,
    settheme:settheme,
    toggle:toggle
  }
  return (
    <div>
      {console.log(theme)
      }
      <Themechang.Provider value={values}>
        {children}
      </Themechang.Provider>
    </div>
  )
}
export function useTheme(){
  let gettheme = useContext(Themechang)
  return gettheme;
}

export default Themecontast