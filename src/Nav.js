import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
  const stylenav = {
    color: 'white'
  };

  return (
    <nav>
        <h3>logo</h3>
        <ul className="nav-links">
            <Link style={stylenav} to="/about">
              <li>about</li>
            </Link>
            
            <Link style={stylenav} to="/shop">
              <li>shop</li>
            </Link>
            
        </ul>
    </nav>
  );
}

export default Nav;
