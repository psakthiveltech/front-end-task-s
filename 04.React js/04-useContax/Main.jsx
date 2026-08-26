import {createContext, useState } from 'react'
import Homeabout from './Homeabout'
import Content from './Content'
import './Main.css'
export let Themecontaxt = createContext()
function Menu() {
  let [theme,settheme]=useState('light')
  let [value,setvalue]= useState('')
const items = [
  { id: 1, name: "Apple", category: "Fruit" },
  { id: 2, name: "Banana", category: "Fruit" },
  { id: 3, name: "Orange", category: "Fruit" },
  { id: 4, name: "Mango", category: "Fruit" },
  { id: 5, name: "Grapes", category: "Fruit" },
  { id: 6, name: "Pineapple", category: "Fruit" },
  { id: 7, name: "Strawberry", category: "Fruit" },
  { id: 8, name: "Papaya", category: "Fruit" },
  { id: 9, name: "Watermelon", category: "Fruit" },
  { id: 10, name: "Guava", category: "Fruit" },
  { id: 11, name: "Carrot", category: "Vegetable" },
  { id: 12, name: "Potato", category: "Vegetable" },
  { id: 13, name: "Tomato", category: "Vegetable" },
  { id: 14, name: "Onion", category: "Vegetable" },
  { id: 15, name: "Cabbage", category: "Vegetable" },
  { id: 16, name: "Cauliflower", category: "Vegetable" },
  { id: 17, name: "Spinach", category: "Vegetable" },
  { id: 18, name: "Broccoli", category: "Vegetable" },
  { id: 19, name: "Peas", category: "Vegetable" },
  { id: 20, name: "Radish", category: "Vegetable" }
];

let filtered = items.filter((j)=>{
  return j.name.toLowerCase().includes(value.toLowerCase())
})

  return (
       <Themecontaxt.Provider value={{theme,settheme}}>
    <div className={theme}>
      {console.log(theme)
      }
      <button onClick={()=>settheme(theme==='light' ? 'dark':'light')}>theme</button>
      <input 
      type="text"
      placeholder='Enter vegies,fruits...'
      onChange={(e)=>setvalue(e.target.value)}
       />
       {filtered.map((k)=>{
        return <h1 key={k.id}>{k.name}</h1>
       })}
    </div> 
    <Homeabout/>
    <Content/>
   </Themecontaxt.Provider>
  )
}
export default Menu