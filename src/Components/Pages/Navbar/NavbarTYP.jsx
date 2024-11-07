import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../Navbar/NavbarTYP.css';
import logo from '../../../assets/agpotatologoweb.png';
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from '../Navbar/Icons.jsx';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdownAgriBusiness, setDropdownAgriBusiness] = useState(false);
  const [dropdownPotatoInsights, setDropdownPotatoInsights] = useState(false);

  const handleMouseEnterAgriBusiness = () => setDropdownAgriBusiness(true);
  const handleMouseLeaveAgriBusiness = () => setDropdownAgriBusiness(false);

  const handleMouseEnterPotatoInsights = () => setDropdownPotatoInsights(true);
  const handleMouseLeavePotatoInsights = () => setDropdownPotatoInsights(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar1">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo1">
            <img src={logo} alt="Logo" className="logo1" />
            <span className="icon"></span>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/AboutUS"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item" onMouseEnter={handleMouseEnterAgriBusiness} onMouseLeave={handleMouseLeaveAgriBusiness}>
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                AgriBusiness
              </NavLink>
              {dropdownAgriBusiness && (
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to="/supply-chain" className="dropdown-item">Supply Chain</NavLink>
                  </li>
                  <li>
                    <NavLink to="/potato-by-product" className="dropdown-item">Potato By Product</NavLink>
                  </li>
                  <li>
                    <NavLink to="/export-excellence" className="dropdown-item">Export Excellence</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Coldstorage" className="dropdown-item">Cold Storage</NavLink>
                  </li>
                  <li>
                    <NavLink to="/frozen-products" className="dropdown-item">Frozen Products</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Meetfarmer" className="dropdown-item">Meet the Farmer</NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/VendorCustomerPage"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Vendor & Customers
              </NavLink>
            </li>
            <li className="nav-item" onMouseEnter={handleMouseEnterPotatoInsights} onMouseLeave={handleMouseLeavePotatoInsights}>
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Potato Insights
              </NavLink>
              {dropdownPotatoInsights && (
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to="/TypesOfPotatoes" className="dropdown-item">Types of Potatoes</NavLink>
                  </li>
                  <li>
                    <NavLink to="/nutritional-facts" className="dropdown-item">Nutritional Facts</NavLink>
                  </li>
                  <li>
                    <NavLink to="/potato-history" className="dropdown-item">Potato History</NavLink>
                  </li>
                  <li>
                    <NavLink to="/potato-recipes" className="dropdown-item">Potato Recipes</NavLink>
                  </li>
                  <li>
                    <NavLink to="/faq" className="dropdown-item">FAQs</NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Gallery"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Contact1"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <HamburgetMenuOpen />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
