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
			price: "371.00",
		},
		{
			id: 2,
			name: "Jiva Honey Oil",
			img: "/img/pr2.jpg",
			price: "210.00"
		},
		{
			id: 3,
			name: "Katherine Shampoo",
			img: "/img/pr3.jpg",
			price: "120.20"
		},
		{
			id: 4,
			name: "Acutone Tablets",
			img: "/img/pr4.jpg",
			price: "70.89"
		},
		{
			id: 5,
			name: "Sanosan",
			img: "/img/pr5.jpg",
			price: "645.00"
		},
		{
			id: 6,
			name: "Chicnutrix Tablet ",
			img: "/img/pr8.bmp",
			price: "1296.00"
		},
		{
			id: 7,
			name: "Face Mask ",
			img: "/img/pr9.bmp",
			price: "300.00"
		},
		{
			id: 8,
			name: "Natural Herbal ",
			img: "/img/pr10.jpeg",
			price: "582.00"
		},
		{
			id: 9,
			name: "Whiskas Adult ",
			img: "/img/pr11.bmp",
			price: "582.00"
		},
		{
			id: 10,
			name: "Cetaphil Sun ",
			img: "/img/pr12.bmp",
			price: "918.00"
		},
		{
			id: 11,
			name: " Baidyanath Basant",
			img: "/img/pr13.jpeg",
			price: "2358.00"
		},
		{
			id: 12,
			name: " Medisyth Drops",
			img: "/img/pr14.bmp",
			price: "135.00"
		},
		{
			id: 13,
			name: "Cetaphil Daily Lotion",
			img: "/img/pr15.jpg",
			price: "636.00"
		},
		{
			id: 14,
			name: "Accu-Check Instant test Strips",
			img: "/img/pr16.jpg",
			price: "891.65"
		},
		{
			id: 15,
			name: "Coloplast Brava Protective Sheet",
			img: "/img/pr17.jpg",
			price: "608.00"
		},

	];

	return (
		<>
			<section className="">
				<Navbar />
				<CartProvider>
					<section className="products">
							<h1 className="pt text-center fw-bold mb-5 mt-5">Products</h1>
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
