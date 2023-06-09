import React from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/items">Items</Link>
        </li>
        <li>
          <Link to="/stocks">Stock</Link>
        </li>
        <li>
          <Link to="/bills">Bills</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
