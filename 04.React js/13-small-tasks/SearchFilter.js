import React, { useState } from 'react'

function Searchfilter() {
  let [fruit,setfruit]=useState('')
  let values = [
  "🍎 Apple",
  "🍌 Banana",
  "🍊 Orange",
  "🥭 Mango",
  "🍍 Pineapple",
  "🍇 Grapes",
  "🍓 Strawberry",
  "🫐 Blueberry",
  "🍉 Watermelon",
  "🥝 Kiwi",
  "🍑 Peach",
  "🍒 Cherry",
  "🍐 Pear",
  "🥥 Coconut",
  "🍈 Melon",
  "🍋 Lemon",
  "🍏 Green Apple",
  "🍅 Tomato",
  "🍆 Eggplant (botanically a fruit!)",
  "🍇 Black Grapes"

  
]
const filterdata = values.filter((val)=>{
  return val.toLowerCase().includes(fruit.toLowerCase())
})

  return (
    <div className='container' style={{margin:"50px",backgroundColor:"black",color: "yellow",alignItems:"center"}}>
      <input 
      type="text"
      value={fruit}
      onChange={(e)=>setfruit(e.target.value)}
      placeholder='enter friut'
      />
      <div>
        <p>Found :{filterdata.length} result{filterdata.length !== 1 ? 's' : ''}</p>

        {
          filterdata.map((it,index)=>{
            return <h3 key={index}>{it}</h3>
          })
        }
      </div>
      {
      console.log(filterdata)
      
      }
    </div>
  )
}

export default Searchfilter