import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Header.css';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems } = useCart(); // ✅ use the custom hook here

  // Hide navbar on login page
  if (location.pathname === '/') return null;

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <Link to="/products">🛒 ShopGo</Link>
        </div>
        <div className="nav-links">
          <Link to="/products">Home</Link>
          <Link to="/cart">
            Cart
            <span className="cart-count">({cartItems.length})</span>
          </Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
