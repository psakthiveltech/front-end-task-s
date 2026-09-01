import React, { useContext, useEffect, useReducer, useRef } from "react";
import { CartContext } from "./CartProvider";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "Load_Cart":
      return {
        ...state,
        cart: action.payload.map((item) => ({
          ...item,
          quantity: item.quantity || 1,
        })),
      };

    case "Increament_Qty":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "Decreament_Qty":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

    case "Remove_Item":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const [state, dispatch] = useReducer(cartReducer, { cart: [] });
  const totalRef = useRef();

  // Load only once or when cartItems change
  useEffect(() => {
    dispatch({ type: "Load_Cart", payload: cartItems });
  }, [cartItems]);

  const total = state.cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  useEffect(() => {
    if (totalRef.current) {
      totalRef.current.style.color = "green";
      setTimeout(() => (totalRef.current.style.color = "black"), 500);
    }
  }, [total]);

  return (
    <section className="cart">
      <div className="container py-4">
        <div className="row">
          {state.cart.length === 0 ? (
            <h5 className="text-center text-secondary">Cart Empty 😕</h5>
          ) : (
            state.cart.map((item, index) => (
              <div
                className="product-card col-md-4 d-flex flex-column align-items-center my-4"
                key={index}
              >
                <img src={item.image} alt={item.name} width="150" />
                <h5>{item.name}</h5>
                <p>₹{item.price}</p>
                <div className="d-flex align-items-center gap-2">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() =>
                      dispatch({ type: "Decreament_Qty", payload: item.id })
                    }
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() =>
                      dispatch({ type: "Increament_Qty", payload: item.id })
                    }
                  >
                    +
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      dispatch({ type: "Remove_Item", payload: item.id })
                    }
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <h3 className="text-start" ref={totalRef}>
          Total: ₹{total}
        </h3>
      </div>
    </section>
  );
};

export default Cart;
