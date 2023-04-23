import React, { useContext } from "react";
import { CartContext } from "./CartContext";
// import Products from "./Products";

const ProductsPage = ({ product }) => {
	const { addToCart } = useContext(CartContext);

	const handleAddToCart = () => {
		addToCart(product, 1);
	};

	return (
		<div>
			<h3>{product.name}</h3>
			<img src={product.img} alt="" />
			<p>{product.price}</p>
			<button onClick={handleAddToCart}>Add to Cart</button>
		</div>
	);
};

export default ProductsPage;
