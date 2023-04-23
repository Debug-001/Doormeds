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
			price: "230rs",
		},
		{
			id: 2,
			name: "Jiva Honey Oil",
			img: "/img/pr2.jpg",
			price:"102rs"
		},
		{
			id: 3,
			name: "Product 3",
			img: "/img/pr3.jpg",
			price:","
		},
		{
			id: 4,
			name: "Product 3",
			img: "/img/pr4.jpg",
			price:","
		},
		{
			id: 5,
			name: "Product 3",
			img: "/img/pr5.jpg",
			price:","
		},
	];

	return (
		<>
			<section className="">
				<Navbar />
				<CartProvider>
					<section className="products">
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
