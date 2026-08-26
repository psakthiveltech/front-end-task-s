import { useContext } from 'react'
import { Creatcontent } from './Cartlogics';

function Productdis() {
  const {addToCart} = useContext(Creatcontent)
  const products = [
  { id: 1, name: "Laptop", emoji: "💻", price: 75000, rating: 4.5, quantity: 1 },
{ id: 2, name: "Smartphone", emoji: "📱", price: 45000, rating: 4.7, quantity: 1 },
{ id: 3, name: "Headphones", emoji: "🎧", price: 3000, rating: 4.2, quantity: 1 },
{ id: 4, name: "Camera", emoji: "📷", price: 55000, rating: 4.6, quantity: 1 },
{ id: 5, name: "Watch", emoji: "⌚", price: 12000, rating: 4.1, quantity: 1 },
{ id: 6, name: "Shoes", emoji: "👟", price: 2500, rating: 4.0, quantity: 1 },
{ id: 7, name: "Backpack", emoji: "🎒", price: 1800, rating: 4.3, quantity: 1 },
{ id: 8, name: "Book", emoji: "📚", price: 500, rating: 4.8, quantity: 1 },
{ id: 9, name: "Pen", emoji: "🖊️", price: 50, rating: 4.0, quantity: 1 },
{ id: 10, name: "Keyboard", emoji: "⌨️", price: 1500, rating: 4.4, quantity: 1 },
{ id: 11, name: "Mouse", emoji: "🖱️", price: 800, rating: 4.2, quantity: 1 },
{ id: 12, name: "Monitor", emoji: "🖥️", price: 12000, rating: 4.5, quantity: 1 },
{ id: 13, name: "Coffee", emoji: "☕", price: 200, rating: 4.9, quantity: 1 },
{ id: 14, name: "Pizza", emoji: "🍕", price: 350, rating: 4.7, quantity: 1 },
{ id: 15, name: "Burger", emoji: "🍔", price: 150, rating: 4.3, quantity: 1 },
{ id: 16, name: "Ice Cream", emoji: "🍨", price: 100, rating: 4.6, quantity: 1 },
{ id: 17, name: "Bicycle", emoji: "🚲", price: 15000, rating: 4.4, quantity: 1 },
{ id: 18, name: "Car", emoji: "🚗", price: 800000, rating: 4.8, quantity: 1 },
{ id: 19, name: "House", emoji: "🏠", price: 5000000, rating: 5.0, quantity: 1 },
{ id: 20, name: "TV", emoji: "📺", price: 30000, rating: 4.5, quantity: 1 }
];

  return (
    <div className='row'>
      {
        products.map((items)=>(
          <div className='col-lg-3 my-2 col-sm-6'>
            <div className='card text-center'>
              <h1 >{items.emoji}</h1>
              <h6>{items.name}</h6>
              <h6>{items.rating}</h6>
              <h6>{items.price}</h6>
              <button className='btn btn-outline-success' onClick={()=>addToCart(items)}>Add To Cart</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Productdis