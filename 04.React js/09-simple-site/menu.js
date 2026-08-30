import React, { useContext, useState } from 'react'
import Homeabout from './Homeabout'
import Content from './Content'
import ''
function Menu() {
  let [theme,settheme]=useState('light')
  let [value,setvalue]= useState('')
  let Themechanger = useContext()
  const items = [
  { name: "Apple", category: "Fruit" },
  { name: "Banana", category: "Fruit" },
  { name: "Orange", category: "Fruit" },
  { name: "Mango", category: "Fruit" },
  { name: "Grapes", category: "Fruit" },
  { name: "Pineapple", category: "Fruit" },
  { name: "Strawberry", category: "Fruit" },
  { name: "Papaya", category: "Fruit" },
  { name: "Watermelon", category: "Fruit" },
  { name: "Guava", category: "Fruit" },
  { name: "Carrot", category: "Vegetable" },
  { name: "Potato", category: "Vegetable" },
  { name: "Tomato", category: "Vegetable" },
  { name: "Onion", category: "Vegetable" },
  { name: "Cabbage", category: "Vegetable" },
  { name: "Cauliflower", category: "Vegetable" },
  { name: "Spinach", category: "Vegetable" },
  { name: "Broccoli", category: "Vegetable" },
  { name: "Peas", category: "Vegetable" },
  { name: "Radish", category: "Vegetable" }
];
let filtered = items.filter((j)=>{
  return j.name.toLowerCase().includes(value.toLowerCase())
}

)

  return (
    <div className={theme}>
      <button onClick={()=>settheme(theme==='light' ? 'dark':'light')}>theme</button>
      {console.log(theme)
      }
      <input 
      type="text"
      placeholder='Enter vegies,fruits...'
      onChange={(e)=>setvalue(e.target.value)}
       />
       {filtered.map((k)=>{
        return <h1>{k.name}</h1>
       })}
       <Themechanger.provider value={theme}>
        <Homeabout/>
        <Content/>
       </Themechanger.provider>
    </div>
  )
}

export default Menu