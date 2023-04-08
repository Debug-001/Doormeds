import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";



const Navbar = () => {

  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

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
                <a className="nav-link active" href="/Products">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/appointments">
                  Appointments
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/ambulance">
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
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
