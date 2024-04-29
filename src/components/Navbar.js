import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-brand">
        Bank of Flatiron
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <a href="#" className="navbar-link">Home</a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">Accounts</a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">Transactions</a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">About</a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
