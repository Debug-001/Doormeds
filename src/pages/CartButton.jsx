import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "./CartContext";

const CartButton = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <button>
        <FaShoppingCart />
        <span>{cartItems.length}</span>
      </button>
    </div>
  );
};

export default CartButton;
