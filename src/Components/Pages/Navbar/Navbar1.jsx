import React, { useEffect, useState } from 'react';
import '../Navbar/Navbar1.css';
import logo from '../../../assets/agpotatologoweb.png';
import menu_icon from '../../../assets/menu.png';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleDropdownClick = () => {
    setDropdownOpen(prev => !prev);
  };

  return (
    <nav className={`container ${sticky ? 'sticky' : ''}`}>
      <RouterLink to="/">
        <img src={logo} alt="Logo" className="logo" />
      </RouterLink>

      <img
        src={menu_icon}
        alt="Menu Icon"
        className="menu-icon"
        onClick={toggleMenu}
      />

      <ul className={mobileMenu ? 'active' : ''}>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/AboutUS">About Us</RouterLink></li>

        <li className="dropdown">
          <RouterLink to="/AgriBusiness" onClick={handleDropdownClick}>AgriBusiness</RouterLink>
          <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
            <li><RouterLink to="/supply-chain">Supply Chain</RouterLink></li>
            <li><RouterLink to="/potato-by-product">Potato By Product</RouterLink></li>
            <li><RouterLink to="/export-excellence">Export Excellence</RouterLink></li>
            <li><RouterLink to="/Coldstorage">Cold Storage</RouterLink></li>
            <li><RouterLink to="/frozen-products">Frozen Products</RouterLink></li>
            <li><RouterLink to="/Meetfarmer">Meet the Farmer</RouterLink></li>
          </ul>
        </li>

        <li><RouterLink to="/VendorCustomerPage">Vendor & Customers</RouterLink></li>

        <li className="dropdown">
          <RouterLink to="/">Potato Insights</RouterLink>
          <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
            <li><RouterLink to="/TypesOfPotatoes">Types of Potatoes</RouterLink></li>
            <li><RouterLink to="/nutritional-facts">Nutritional Facts</RouterLink></li>
            <li><RouterLink to="/potato-history">Potato History</RouterLink></li>
            <li><RouterLink to="/potato-recipes">Potato Recipes</RouterLink></li>
            <li><RouterLink to="/faq">FAQs</RouterLink></li>
          </ul>
        </li>

        <li><RouterLink to="/Gallery">Gallery</RouterLink></li>
        <li><RouterLink to="/Contact1">Contact Us</RouterLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;