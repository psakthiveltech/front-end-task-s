import React, { createContext, useState } from 'react'
import './Mainstyle.css'
import Search from './SearchFile'
import AllcardFile from './AllcardFile'

export let Themechanger = createContext()
function Mainfile() {
  let [theme,settheme]=useState('light')
  return (
    <Themechanger.Provider value = {theme}>
    <div className={theme}>{console.log(theme)
    }
      <button onClick={()=>settheme(theme==='light'?'dark':'light')}>{theme}</button>
      <h1>hi this is a main file</h1>
    </div>
    <Search/>
    <AllcardFile/>
    </Themechanger.Provider>
  )
}

export default Mainfile