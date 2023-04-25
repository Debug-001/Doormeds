import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './payments.css'

const Payments = () => {
  return (
    <>
    <Navbar/>
    <div className="profile-page section-center">
  {/* info */}
  <div className="profile-page-info">
    <div className="profile-info">
      <div className="personal-info">
        {/* text */}
        <div className="personal-info-text">
          <p id="p-1">Payment </p>
        </div>
        {/* end of text */}
      </div>
    </div>
    {/* end of profile info */}
    {/* name */}
    <div className="name">
      <div className="name-text">
        <p id="p">Name</p>
      </div>
      <div className="name-field">
        <input type="text" placeholder="First name" className="name-input" />
        <input
          type="text"
          placeholder="Last name"
          id="last-name"
          className="name-input"
        />
      </div>
    </div>
    {/* end of name */}
    {/* email */}
    <div className="email">
      <div className="email-text">
        <p id="p">email</p>
      </div>
      <div className="email-field">
        <input
          type="email"
          name="email"
          id="email"
          className="email-input"
          placeholder="Email"
        />
      </div>
    </div>
  </div>
  {/* end of email */}
  {/* number */}
  <div className="phone-number">
    <div className="phone-text">
      <p id="p">number</p>
    </div>
    <div className="phone-field">
      <input
        type="number"
        name=""
        id=""
        className="phone-input"
        placeholder="Number"
      />
    </div>
  </div>
  {/* end of number */}
  <div className="phone-number">
    <div className="phone-text">
      <p id="p">Shipping address</p>
    </div>
    <div className="phone-field">
      <input
        type="text"
        name=""
        id=""
        className="phone-input"
        placeholder="shipping address"
      />
    </div>
  </div>
  {/* address end */}
  <div className="phone-number">
    <div className="phone-text">
      <p id="p">Billing address</p>
    </div>
    <div className="phone-field">
      <input
        type="text"
        name=""
        id=""
        className="phone-input"
        placeholder="billing address"
      />
    </div>
  </div>
  <div className="btn">
    <a href="https://api.razorpay.com/v1/checkout/embedded">
    <button  className='btn btn-primary'>Pay now</button>
    </a>
  </div>
  {/* end of info */}
</div>

    <Footer/>
    </>
  )
}

export default Payments


