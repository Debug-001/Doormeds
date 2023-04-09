import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Cart = () => {
  return (
    <>
      <Navbar />
      <section>
        <div className="col-md-8 col-xl-6">
          <div className="row">
            <h1 className="text-center">
              Cart Page UI
            </h1>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Cart
