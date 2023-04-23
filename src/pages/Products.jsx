import React, { useState } from "react";
import { CartProvider } from "./CartContext";
import ProductsPage from "./ProductsPage";
import Cart from "./Cart";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Products = () => {
	const product = [
		{
			id: 1,
			name: "Minimalistic Oil Free Facewash",
			img: "/img/pr1.jpg",
			description: "Get now asap bancho",
			price: "230rs",
		},
		{
			id: 2,
			name: "Product 2",
			img: "/img/pr2.jpg",
			description: "Description 2",
		},
		{
			id: 3,
			name: "Product 3",
			img: "/img/pr3.jpg",
			description: "Description 3",
		},
	];

	return (
		<>
			<section className="">
				<Navbar />
				<CartProvider>
					<section className="products">
						{/* <h2>Products</h2> */}
						<div className="product-list">
							{product.map((product) => (
								<ProductsPage key={product.id} product={product} />
							))}
						</div>
					</section>
					<Cart />
				</CartProvider>
				<Footer />
			</section>
		</>
	);
};

export default Products;
