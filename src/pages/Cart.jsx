import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {submitData, postUserData} from './Home'

const Cart = ({ cartItems, removeFromCart }) => {
  return (

    <>
    <Navbar/>
        <div className="flex mt-5">
          <div className="order-page ">
            <h3>order summary</h3>
            <div className="order-flex order-center">
              <div className="order-info ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="currentColor"
                  className="bi bi-capsule-pill"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.02 5.364a3 3 0 0 0-4.242-4.243L1.121 6.778a3 3 0 1 0 4.243 4.243l5.657-5.657Zm-6.413-.657 2.878-2.879a2 2 0 1 1 2.829 2.829L7.435 7.536 4.607 4.707ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm-.5 1.042a3 3 0 0 0 0 5.917V9.042Zm1 5.917a3 3 0 0 0 0-5.917v5.917Z" />
                </svg>
                <p>
                  3M Avagard 0.5% CHG Handrub Solution 500 ml <br />
                  <span className="stock"> Only 6 Left In Stock </span>
                  <br /> <span className="original-cost">Rs 319.02</span>
                  <br /> <span className="rupees">rs 818 </span>{" "}
                  <span className="save-money">save rs 498 </span>
                  <br />
                  delivery between april 15-april 16
                </p>
              </div>
              <div className="label">
                <label htmlFor="quantity">QTY</label>
                <select name="quantity" id="quantity">
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                </select>
              </div>
            </div>
            <hr />
          </div>
          <div className="flex-2">
            <div className="items-add section-center">
              <div className="items-info">
                <p>add more items</p>
                <i className="fa-sharp fa-light fa-plus" />
              </div>
            </div>
            <div className="payment section-center">
              <p>payment details</p>
              <div className="payment-info">
                <p>
                  mrp total <span>Rs 818</span>
                </p>
                <p>
                  additional discount <span>Rs -498</span>
                </p>
                <p>
                  total amount <span>Rs 319</span>
                </p>
                <p>
                  shipping delivery page <span>Rs 0.00</span>
                </p>
                <p id="total-payable">
                  total payable <span>Rs 319</span>
                </p>
                <p id="total-savings">
                  total savings <span>Rs 498</span>
                </p>
                <p id="total-payable">
                  total payable <br />
                  Rs 319{" "}
                  <span>
                    {" "}
                    <button className='btn btn-primary'>proceed </button>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}

        <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div
              className="shadow"
              style={{
                width: "100%",
                minHeight: 630,
                marginTop: 119,
                backgroundColor: "rgba(255, 255, 255, 0.79)"
              }}
            >
              <form style={{ paddingTop: 70, marginTop: "-125px" }}>
                <div className="form-group mb-3">
                  <h1 className="text-center">Contact Us</h1>
                </div>
                <div className="form-group mb-3">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    name='firstName'
                    style={{ width: "50%", marginLeft: "25%", marginTop: 39 }}
                    required=""
                    placeholder="Name"
                    value={userData.firstName}
                    onChange={postUserData}
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    name='email'
                    style={{ width: "50%", marginLeft: "25%" }}
                    placeholder="Email"
                    value={userData.email}
                    onChange={postUserData}
                  />
                </div>
                <div className="form-group mb-3">
                  <textarea
                    className="form-control form-control-lg"
                    name='message'
                    style={{ width: "50%", marginLeft: "25%", minHeight: 200 }}
                    placeholder="Message"
                    value={userData.message}
                    onChange={postUserData}
                  />
                </div>
                <div className="form-group mb-3">
                  <button
                    className="btn btn-dark btn-lg"
                    style={{ width: "50%", marginLeft: "25%" }}
                    type="submit"
                    onClick={submitData}>
                    Send {""}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

        <Footer/>
    </>



    // <div>
    //   <ul>
    //     {cartItems.map((item) => (
    //       <li key={item.id}>
    //         {item.name} - ${item.price} - Quantity: {item.quantity}
    //         <button onClick={() => removeFromCart(item.id)}>Remove</button>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default Cart;
