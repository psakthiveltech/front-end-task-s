import React, { useContext } from 'react'
import apple from './APPLE.png'
import mango from './fresh-mango-fruit.jpeg'
import orange from './orange.jpg'
import { Creatorcart } from './Cardprovider'
function Product() {
  const {addtocard} = useContext(Creatorcart)
  let fruits = [
    {id:1,name:'APPLE',price:90,image:apple},
    {id:2,name:'MANGO',price:40,image:mango},
    {id:3,name:'ORANGE',price:20,image:orange},
    
  ]
  return (
    <div>
      <div className='row d-flex '>
      {
        fruits.map((item)=>
         {
          return <div className='col-lg-2 card bg-warning ' key={item.id}>
          <img src={item.image} alt={item.name} width='100%'/>
          <h1>{item.name}</h1>
          <h3>{item.price}</h3>{
            console.log(item.id)
            
          }
          <button className='btn btn-success' onClick={()=>addtocard(item)}>Add to Card </button>
         </div>

        })
      }
      </div>
    </div>
  )
}

export default Product