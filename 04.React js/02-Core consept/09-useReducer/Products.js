import React, { useContext } from 'react'
import { Cartmanager } from './Cardcontext';

function Products() {
  const {addToCart} = useContext(Cartmanager)
  const products = [
  { emoji: "🍎", name: "Apple", quantity: 1, price: 1.2, category: "Fruit" },
  { emoji: "🍌", name: "Banana", quantity: 1, price: 0.5, category: "Fruit" },
  { emoji: "🍇", name: "Grapes", quantity: 1, price: 2.5, category: "Fruit" },
  { emoji: "🍊", name: "Orange", quantity: 1, price: 1.0, category: "Fruit" },
  { emoji: "🍉", name: "Watermelon", quantity: 1, price: 3.0, category: "Fruit" },
  { emoji: "🥭", name: "Mango", quantity: 1, price: 2.0, category: "Fruit" },
  { emoji: "🍍", name: "Pineapple", quantity: 1, price: 2.8, category: "Fruit" },
  { emoji: "🥝", name: "Kiwi", quantity: 1, price: 1.5, category: "Fruit" },
  { emoji: "🍓", name: "Strawberry", quantity: 1, price: 2.2, category: "Fruit" },
  { emoji: "🍒", name: "Cherry", quantity: 1, price: 2.7, category: "Fruit" },
  { emoji: "🥑", name: "Avocado", quantity: 1, price: 1.9, category: "Vegetable" },
  { emoji: "🥦", name: "Broccoli", quantity: 1, price: 1.3, category: "Vegetable" },
  { emoji: "🥕", name: "Carrot", quantity: 1, price: 0.8, category: "Vegetable" },
  { emoji: "🌽", name: "Corn", quantity: 1, price: 1.1, category: "Vegetable" },
  { emoji: "🍅", name: "Tomato", quantity: 1, price: 0.9, category: "Vegetable" },
  { emoji: "🥔", name: "Potato", quantity: 1, price: 0.6, category: "Vegetable" },

  { emoji: "🍞", name: "Bread", quantity: 1, price: 2.5, category: "Bakery" },
  { emoji: "🧀", name: "Cheese", quantity: 1, price: 3.5, category: "Dairy" },
  { emoji: "🥛", name: "Milk", quantity: 1, price: 1.5, category: "Dairy" },
  { emoji: "🥚", name: "Eggs", quantity: 1, price: 0.2, category: "Dairy" },

  { emoji: "🥩", name: "Steak", quantity: 1, price: 8.0, category: "Meat" },
  { emoji: "🍗", name: "Chicken", quantity: 1, price: 5.0, category: "Meat" },

  { emoji: "☕", name: "Coffee", quantity: 1, price: 2.0, category: "Beverage" },
  { emoji: "🍫", name: "Chocolate", quantity: 1, price: 1.8, category: "Snack" },
  { emoji: "🍪", name: "Cookies", quantity: 1, price: 2.3, category: "Snack" },
];

  return (
    <div className='row'>
      {
products.map((items,index)=>{
  return <div className='col-lg-3 my-3'>
          <div className='card text-center bg-dark text-light' key={index}>
            <h1>{items.emoji}</h1>
            <h2>{items.name}</h2>
            <h3>{items.category}</h3>
            <h4>{items.price}</h4>
            <button className='btn btn-outline-success' onClick={()=>addToCart(items)}>Add To Cart</button>
          </div>
      </div>
})
      }
    </div>
  )
}

export default Products