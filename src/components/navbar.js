import PropTypes from "prop-types"
import React from "react"
import Hamburguer from "./navbar/hamburguer"
import NavbarDropdown from "./navbar/dropdown"
import logo from "../images/MFB_consulting_fondo transparente-04.png"
import { Link } from "gatsby"

const Navbar = () => (

  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="container">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img src={logo} alt="MFB Consulting" width="80" style={{
            maxHeight: 'none',
            margin: 0
          }}/>
        </Link>

        <Hamburguer></Hamburguer>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">
            Home
        </a>

          <a className="navbar-item">
            Documentation
        </a>

          <NavbarDropdown title="More" links={
            [
              { title: "About", href: "#" },
              { title: "Jobs", href: "#" }
            ]
          }
          ></NavbarDropdown>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">
                Log in
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar