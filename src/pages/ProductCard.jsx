import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";


const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      {/* <img src={img} alt={product.name} /> */}
      {/* <h3>{product.name}</h3> */}
      {/* <p>${product.price}</p> */}
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;