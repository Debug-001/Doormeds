import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {

  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  // const { cartItems } = this.state;
  // const cartItemCount = cartItems.length;

  return (
    < >
      <nav className="navbar navbar-light navbar-expand-md py-3">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <span>Doormeds</span>
          </a>
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler"
            data-bs-target="#navcol-3"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navcol-3">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/products">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/appointments">
                  Appointments
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="https://ambimed.netlify.app/book">
                  Ambulance
                </a>
              </li>
              <li className="nav-item" />
              <li className="nav-item" />
            </ul>
            {isAuthenticated && (
              <p className="login-text">Welcome! {user.name}</p>
            )}
            {/* onclick authentication login/logout */}
            {isAuthenticated ? (
              <button
                type="button"
                className="btn btn-outline-dark"
                onClick={() =>
                  logout({
                    logoutParams: { returnTo: window.location.origin },
                  })
                }
              >
                Sign Out
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-outline-dark"
                onClick={() => loginWithRedirect()}
              >
                Sign In
              </button>
            )}
            <a href="/cart">
            <button className='btn px-3'
             onclick="window.location='home.jsx';"
            >
                 <AiOutlineShoppingCart  style={{"width":"20px"}}/>
                
            </button>
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
