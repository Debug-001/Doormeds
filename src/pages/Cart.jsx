import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, totalAmount } = useContext(CartContext);

  const handleRemoveClick = (product) => {
    removeFromCart(product);
  };

  const handleQuantityChange = (product, event) => {
    const quantity = parseInt(event.target.value);
    updateQuantity(product, quantity);
  };

  return (
    <div className="product-card">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}> <img className="cart-img"
              style={{"width":"10%"}} src={item.img} alt="" />
                {item.name} ({item.quantity}) - ₹{item.price * item.quantity}
                <button  className="btn btn-primary" onClick={() => handleRemoveClick(item)}>Remove</button>
                <select value={item.quantity} onChange={(e) => handleQuantityChange(item, e)}>
                  {[...Array(10).keys()].map((i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </li>
            ))}
          </ul>
          <p>Total: ₹{totalAmount}</p>
          <button className="btn btn-primary" onClick={()=> window.open("/payments", "_blank")}>Pay Now</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
