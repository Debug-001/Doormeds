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
			price: "Rs. 210.00"
		},
		{
			id: 3,
			name: "Katherine Shampoo",
			img: "/img/pr3.jpg",
			price: "Rs. 120.20"
		},
		{
			id: 4,
			name: "Acutone Tablets",
			img: "/img/pr4.jpg",
			price: "Rs. 70.89"
		},
		{
			id: 5,
			name: "Sanosan",
			img: "/img/pr5.jpg",
			price: "Rs. 645.25.00"
		},
		{
			id: 6,
			name: "Chicnutrix Tablet ",
			img: "/img/pr8.bmp",
			price: "Rs. 1296.00"
		},
		{
			id: 7,
			name: "Face Mask ",
			img: "/img/pr9.bmp",
			price: "Rs. 300.00"
		},
		{
			id: 8,
			name: "Natural Herbal ",
			img: "/img/pr10.jpeg",
			price: "Rs. 582.00"
		},
		{
			id: 9,
			name: "Whiskas Adult ",
			img: "/img/pr11.bmp",
			price: "Rs. 582.00"
		},
		{
			id: 10,
			name: "Cetaphil Sun ",
			img: "/img/pr12.bmp",
			price: "Rs. 918.00"
		},
		{
			id: 11,
			name: " Baidyanath Basant",
			img: "/img/pr13.jpeg",
			price: "Rs. 2358.00"
		},
		{
			id: 12,
			name: " Medisyth Drops",
			img: "/img/pr14.bmp",
			price: "Rs. 135.00"
		}

	];

	return (
		<>
			<section className="">
				<Navbar />
				<CartProvider>
					<section className="products">
						<div className="product-list">
							{/* <h1 className="text-center fw-bold">Products</h1> */}
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
