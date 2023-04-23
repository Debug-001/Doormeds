import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";


const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;