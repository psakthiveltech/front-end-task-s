import React, { useContext } from 'react'
import { Creatorcart } from './Cardprovider'

function Carts() {
  let {values,removecard,removeall} = useContext(Creatorcart)
  return (
    <div>
      <button onClick={removeall}>Remove all</button>
      {
        values.map((items)=>{
          return <div className='col-3'>
           <div key={items.id} className='card'>
            <img src={items.image} alt={items.name}/>
          <h1>{items.name}</h1>
          <button className='btn btn-danger' onClick={()=>removecard(items)}>remove</button>
          </div>
          </div>
        })
      }
    </div>
  )
}
export default Carts