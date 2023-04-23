import React, { useState, useMemo } from "react";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedItems = cartItems.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + quantity };
        } else {
          return item;
        }
      });

      setCartItems(updatedItems);
    } else {
      const newItem = { ...product, quantity };
      setCartItems([...cartItems, newItem]);
    }
  };

  const removeFromCart = (product) => {
    const updatedItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedItems);
  };

  const updateQuantity = (product, quantity) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity };
      } else {
        return item;
      }
    });

    setCartItems(updatedItems);
  };

  const totalAmount = useMemo(() => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, totalAmount }}>
      {children}
    </CartContext.Provider>
  );
};
