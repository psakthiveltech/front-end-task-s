import React, { createContext, useEffect, useState } from 'react'
export const Creatcontent = createContext()
function Cartlogics({ children }) {
  let [CartItem, setCartItem] = useState(() => {
    const saved = localStorage.getItem("cartitem")
    return saved ? JSON.parse(saved) : []
  }
  );

  function addToCart(product) {
    setCartItem((item) => {
      const exist = item.find((sigitem) => sigitem.id === product.id)
      if (exist) {
      return  item.map((val) => 
          val.id===product.id?{...val,quantity:val.quantity+1}:val
        );
      }
      return [...item, product]
    })
  }
  useEffect(() => (
    localStorage.setItem("cartitem", JSON.stringify(CartItem))
  ), [CartItem])
  return (
    <div>
      <Creatcontent.Provider value={{ addToCart, CartItem }}>
        {children}
      </Creatcontent.Provider>
    </div>
  )
}

export default Cartlogics