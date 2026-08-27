import React, { useContext, useEffect, useReducer, useState } from 'react'
import { Creatcontent } from './Cartlogics'

function Quantitymanager(state,action){
  switch(action.type){
    case "ADD_VALUES":
      return {
        ...state,
        cart:action.payload.map((items)=>({
            ...items,
            quantity:items.quantity || 1,
          
        })),
      };
      case "INCREASE_QTY":
        return {
          ...state,
          cart:state.cart.map((vals)=>
             vals.id===action.payload ?
            {...vals,quantity:vals.quantity+1}
            :
            vals
          ),
        };
        case "DEC_QTY" :
          return  {
            ...state,
            cart:state.cart.map((vals)=>
              vals.id===action.payload&&vals.quantity>1 ?{...vals,quantity:vals.quantity-1} : vals
            ),
          };
          case "DEL_QTY":
            return{
              ...state,
              cart:state.cart.filter((vals)=>vals.id!==action.payload),
            }
            default :
            return state

  }
};


function Cart() {
  const {CartItem} = useContext(Creatcontent)
  const [state,dispatch]=useReducer(Quantitymanager,{cart:[]})
  useEffect(()=>(
    dispatch({type:"ADD_VALUES",payload:CartItem})
  ),[CartItem])
const total = state.cart.reduce((acc,item)=>acc+item.price*item.quantity,0)

  return (
    <>
    {
      state.cart.length===0 ? <h1>The Card is empty</h1> :<div className='row'>
      {
        state.cart.map((items,index)=>(
          <div className='col-3 text-center'>
            <div className='card' key={index}>
          <h1>{items.emoji}</h1>
          <h6>{items.name}</h6>
            <button onClick={()=>dispatch({type:"INCREASE_QTY",payload:items.id})}>+</button>
            <button onClick={()=>dispatch({type:"DEC_QTY",payload:items.id})}>-</button>
            <button onClick={()=>dispatch({type:"DEL_QTY",payload:items.id})}>
              <i class="bi bi-trash" style={{cursor: "pointer"}} ></i></button>
          <h3>{items.quantity}</h3>
          
          
            </div>
          </div>
        ))
      }
      <h2>{total}</h2>
    </div> 
    }
    
    </>
  )
}

export default Cart