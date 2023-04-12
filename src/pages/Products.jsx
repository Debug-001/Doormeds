import React from 'react';
import Cart from "./Cart";

 export const products = [
  {
    id: 1,
    name: 'biscut',
  },
  {
    id: 2,
    name: 'pani',
  }
]

const Products = () => {
  return (
    <div>
        <Cart products={products} />
    </div>
  );
};

export default Products;
