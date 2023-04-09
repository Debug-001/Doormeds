import React, { Component } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// Define a Product component to represent each item in the products page
const Product = ({ item, addToCart }) => {
  return (
    <>
      <div className="container">
      <div className="row">
      <div className="grid-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 grid">
              <div className="product-grid7">
                <div className="product-image7"><a href="#"><img className="pic-1" src={item.img} /></a></div>
                <div className="product-content">
                  <h6 className="title">{item.name}</h6>
                  <p>{item.price}</p>
                  <button className='btn btn-primary' onClick={() => addToCart(item)}>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

// Define a ProductsPage component to render the products page
const ProductsPage = ({ products, addToCart }) => {
  return (
    <>
      {products.map(item => (
        <Product key={item.id} item={item} addToCart={addToCart} />
      ))}
    </>
  );
};

// Define a CartItem component to represent each item in the cart page
const CartItem = ({ item, removeFromCart }) => {
  return (
    <section>

    <div className="cart-item">
      <h3 className='d-flex text-center'>{item.name}</h3>
      <img src={item.img} alt="" />
      <p>Price: ${item.price}</p>
      <button onClick={() => removeFromCart(item)}>Remove</button>
    </div>
    </section>
  );
};

// Define a CartPage component to render the cart page
const CartPage = ({ cartItems, removeFromCart }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
          ))}
          <h3>Total: ${total}</h3>
        </div>
      )}
    </div>
  );
};

// Define the main App component that manages the state of products and cart items
class Cart extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: 1, name: 'Random item', img: "src/assets/img/item4.jpg", price: 10
        },
        {
          id: 2, name: 'Kutte ka khana', img: "src/assets/img/item5.jpg", price: 20
        },
        {
          id: 3, name: 'Durex Condoms', img: "src/assets/img/item8.jpg", price: 30
        }
      ],
      cartItems: [],
    };
  }

  addToCart = (item) => {
    this.setState({ cartItems: [...this.state.cartItems, item] });
  }

  removeFromCart = (itemToRemove) => {
    this.setState({ cartItems: this.state.cartItems.filter(item => item !== itemToRemove) });
  }


  render() {
    return (
      <>
      <Navbar/>
        <ProductsPage products={this.state.products} addToCart={this.addToCart} />
        <CartPage cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} />
        <Footer/>
      </>
    );
  }
}

export default Cart;
