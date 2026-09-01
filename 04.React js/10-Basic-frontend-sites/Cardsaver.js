import React, { createContext, useContext, useState } from 'react'
export const Cardsender = createContext()
export function Cardsaver({children}) {
  let [cartdata,setdata] = useState([])
  function HandleCard(items){
    setdata([...cartdata,items])
    
  }
  function CollectData(valfromdata){
    setdata(cartdata.filter((i)=>i.id!==valfromdata.id))
    alert(`Want to Remove  🤔 ${valfromdata.name.toUpperCase()} ?`)
  }
  return (
    <Cardsender.Provider value={{HandleCard,cartdata,setdata,CollectData}}>
   {children}
    </Cardsender.Provider>
  )
}
export const useCards = ()=>{
  const constanrs = useContext(Cardsender)
  return constanrs;
}
export default Cardsaver