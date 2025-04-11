import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Cart.css';

function Cart() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    totalPrice,
    clearCart
  } = useCart();

  const [showPopup, setShowPopup] = useState(false);

  const handleCheckout = () => {
    clearCart();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 4000);
  };

  const handleIncrease = (id, currentQty) => {
    updateQuantity(id, currentQty + 1);
  };

  const handleDecrease = (id, currentQty) => {
    if (currentQty > 1) {
      updateQuantity(id, currentQty - 1);
    }
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>${(item.price * item.quantity).toFixed(2)}</p>

                <div className="qty-control">
                  <button onClick={() => handleDecrease(item.id, item.quantity)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrease(item.id, item.quantity)}>+</button>
                </div>

                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </>
      )}

      {showPopup && <div className="popup">Order placed successfully!</div>}
    </div>
  );
}

export default Cart;
