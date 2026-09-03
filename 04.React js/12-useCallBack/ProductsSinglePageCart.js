import React, { useCallback, useState } from 'react'
// import 'bootstrap/dist/css/bootstrap-min.css'
import img from '../Bootstrap/empty.jpg'
function Product() {
  let [cart,setCart]= useState([])
  let products = [
    {id:1 ,image:"👚",price:200},
    {id:2 ,image:"👘",price:100},
    {id:3 ,image:"🎽",price:220},
    {id:4 ,image:"👔",price:400},
    {id:5 ,image:"🥋",price:500},
    {id:6 ,image:"👕",price:400},
    {id:7 ,image:"👖",price:500},
    {id:8 ,image:"👗",price:600},
    {id:9 ,image:"🥻",price:700},
  ]
  const addtocart = useCallback((callvalue)=>{
    setCart([...cart,callvalue])
    {
    console.log(cart)
    
   }
  })
  return (
    <div className='container'>
      <div className='row'>
      {
        products.map((items,index)=>{
      return <div className='card col-md-3 ' style={{backgroundColor:'orange',color:'green'}} key={index}>
        <h1>{items.image}</h1>
        <h2>{items.price}</h2>
        <button className='btn btn-primary' onClick={()=>addtocart(items)}>Add to card</button>
      </div>}
      )}
    </div>
    <div className='row' style={{marginTop:'40px',backgroundColor: cart.length === 0 ? 'white' : 'black'}}>
    {
      cart.length === 0 ? <img src={img} alt="Empty..." style={{marginLeft:'1%'}}/>:
      <div className='singlepgcard row'  >
        <h4 style={{color:'yellow'}}> <i> Total ₹ </i><b> {cart.reduce((ac,total)=>ac+total.price,0)}</b></h4>
        {
          cart.map((items,index)=>{
            return <div className='col-lg-12 card bg-warning' key={index} style={{marginLeft:"10px",marginTop:'40px',marginBottom:'20px'}}>
              <h1>{items.image}</h1>
              <h3>{items.price}</h3>

            </div>
          })
        }
       
    </div> 
    }
      </div>
    
    </div>
  )
}


export default Product