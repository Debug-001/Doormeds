import React, { useState } from "react";

const Cart = ({ products }) => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const itemIndex = cartItems.findIndex((item) => item.id === product.id);

    if (itemIndex !== -1) {
      const updatedCartItems = [...cartItems]; 
      updatedCartItems[itemIndex].quantity += 1; 
      setCartItems(updatedCartItems); 
    } else {
      const newCartItem = { ...product, quantity: 1 }; 
      setCartItems([...cartItems, newCartItem]); 
    }
  };

  const handleRemoveFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - Quantity: {item.quantity}
              <button onClick={() => handleRemoveFromCart(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <ProductListing products={products} handleAddToCart={handleAddToCart} />
    </div>
  );
};

const ProductListing = ({ products, handleAddToCart }) => {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
