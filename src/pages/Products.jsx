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
			price: "Rs. 371.00",
		},
		{
			id: 2,
			name: "Jiva Honey Oil",
			img: "/img/pr2.jpg",
			price:"Rs. 210.00"
		},
		{
			id: 3,
			name: "Katherine Shampoo",
			img: "/img/pr3.jpg",
			price:"Rs. 120.20"
		},
		{
			id: 4,
			name: "Acutone Tablets",
			img: "/img/pr4.jpg",
			price:"Rs. 70.89"
		},
		{
			id: 5,
			name: "Sanosan",
			img: "/img/pr5.jpg",
			price: "645.25"
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
