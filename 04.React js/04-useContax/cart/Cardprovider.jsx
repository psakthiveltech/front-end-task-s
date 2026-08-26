import React, { createContext, useState } from 'react'
export let Creatorcart = createContext()
function Cardprovider({children}) {
  let[values,setvalues] = useState([]);

  function addtocard(data){
    setvalues([...values,data])
  }
  function removecard(items){
    setvalues(values.filter(i=>i.id !== items.id))
  }
  function removeall(){
    setvalues(values.filter((data,index)=>data === index))
  }
  return (
    <div>
      <Creatorcart.Provider value={{values,addtocard,removecard,removeall}}>
        {children}
      </Creatorcart.Provider>
    </div>
  )
}

export default Cardprovider