import React, { useContext } from 'react'
import { Themecontaxt } from './Main';
function Homeabout() {
  let {theme,settheme} = useContext(Themecontaxt)
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


  return (
    <div >
      <div >
        <div className={theme} style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
          {items.map((e)=>{
          return <div key={e.id} style={{display: 'flex', flexDirection:'column',flexBasis:'20%' ,backgroundColor:'red' ,border:"blue solid 3px"}} >
            <h1 >name:{e.name}</h1>
            <h3>catagory:{e.category}</h3>
           </div>
          })}
        </div>

      </div>
    </div>
  )
}

export default Homeabout