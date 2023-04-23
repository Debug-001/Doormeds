import React, { useState } from "react";
import { CartProvider } from "./CartContext";
import ProductsPage from "./ProductsPage";
import Cart from "./Cart";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'
import img1 from '../assets/img/pr1.jpg'
import img2 from '../assets/img/pr2.jpg'
import img3 from '../assets/img/pr3.jpg'


const Products = () => {

  const product = [
    { id: 1, name: "Minimalistic Oil Free Facewash", img:{img1}, description: "Get now asap bancho", price:"230rs" },
    { id: 2, name: "Product 2", img:{img2}, description: "Description 2" },
    { id: 3, name: "Product 3", img:{img3}, description: "Description 3" },
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

