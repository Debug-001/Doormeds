import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'

const Home = () => {

  const [userData, setUserData] = useState({
    firstName: "",
    email: "",
    message: ""
  });

  let name, value;
  
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value })
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, email, message } = userData
    if (firstName && email && message) {

      const res = fetch(
        'https://civic-abode-341013-default-rtdb.firebaseio.com/contactData.json',
        
        {
          method: "POST",
          Headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            email,
            message
          })
        }
      )
      if (res) {
        setUserData({
          firstName: "",
          email: "",
          message: ""
        })
        alert("Your response has been saved. Expect a reply soon!")
      } else {
        alert("please fill the data")
      }
    }
  }




  return (
    <>
      <Navbar />
      <Carousel />

      {/* first grid  */}
      <div className="shopping-grid">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="product-grid7">
                <div className="product-image7">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="src/assets/img/item4.jpg"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h4 className="title">
                    Trelenze
                  </h4>
                  <p>₹ 460.63</p>
                  <button className='btn btn-primary'>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid7">
                <div className="product-image7">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="src/assets/img/item5.jpg"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h4 className="title">
                    Pedigree
                  </h4>
                  <p>₹ 390.50</p>
                  <button className='btn btn-primary'>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid7">
                <div className="product-image7">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="src/assets/img/item6.jpg"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h4 className="title">
                    Accu-Chek
                  </h4>
                  <p>₹ 1100.23</p>
                  <button className='btn btn-primary'>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid7">
                <div className="product-image7">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="src/assets/img/item8.jpg"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h4 className="title">
                    Durex
                  </h4>
                  <p>₹ 250.00</p>
                  <button className='btn btn-primary'>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second grid  */}
      <div className="grid-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 grid">
              <div className="product-grid7">
                <div className="product-image7">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="src/assets/img/pr1.jpg"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h6 className="title">
                    Minimalistic Acid Face Wash
                  </h6>
                  <p>₹ 284.05</p>
                  <button className='btn btn-primary'>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid7">
                <div className="product-image7">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="src/assets/img/pr2.jpg"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h6 className="title">
                    Jiva Aryurveda Honey 1KG
                  </h6>
                  <p>₹ 384.00</p>
                  <button className='btn btn-primary'>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid7">
                <div className="product-image7">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="src/assets/img/pr3.jpg"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h6 className="title">
                    Anti - Dandruff Shampoo 150 ml
                  </h6>
                  <p>₹ 175.75</p>
                  <button className='btn btn-primary'>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid7">
                <div className="product-image7">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="src/assets/img/pr4.jpg"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h6 className="title">
                    OZiva Glutathione Builder Capsule 60's
                  </h6>
                  <p>₹ 735.08</p>
                  <button className='btn btn-primary'>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid7">
                <div className="product-image7">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="src/assets/img/pr5.jpg"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h6 className="title">
                    Sanosan Baby Care Lotion 500 ml
                  </h6>
                  <p>₹ 1128.00</p>
                  <button className='btn btn-primary'>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid7">
                <div className="product-image7">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="src/assets/img/pr6.jpg"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h6 className="title">
                    Stocking Knee High Class 2 -(Large) 1's
                  </h6>
                  <p>₹ 1384.00</p>
                  <button className='btn btn-primary'>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid7">
                <div className="product-image7">
                  <a href="#">
                    <img
                      style={{ "width": "50%", "marginleft": "4.5rem" }}
                      className="pic-1"
                      src="src/assets/img/pr7.jpg"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h6 className="title">
                    Omnigel
                  </h6>
                  <p>₹ 350.00</p>
                  <button className='btn btn-primary'>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid7">
                <div className="product-image7">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="src/assets/img/item8.jpg"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h6 className="title">
                    Durex
                  </h6>
                  <p>₹ 90.00</p>
                  <button className='btn btn-primary'>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid7">
                <div className="product-image7">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="src/assets/img/item8.jpg"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h6 className="title">
                    Durex
                  </h6>
                  <p>₹ 90.00</p>
                  <button className='btn btn-primary'>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid7">
                <div className="product-image7">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="src/assets/img/pr6.jpg"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h6 className="title">
                    Durex
                  </h6>
                  <p>₹ 90.00</p>
                  <button className='btn btn-primary'>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid7">
                <div className="product-image7">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="src/assets/img/pr6.jpg"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h6 className="title">
                    Durex
                  </h6>
                  <p>₹ 90.00</p>
                  <button className='btn btn-primary'>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="product-grid7">
                <div className="product-image7">
                  <a href="#">
                    <img
                      className="pic-1"
                      src="src/assets/img/pr6.jpg"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h6 className="title">
                    Durex
                  </h6>
                  <p>₹ 90.00</p>
                  <button className='btn btn-primary'>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Carousel />

      {/* contact section  */}
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

      <Footer />
    </>
  )
}

export default Home
