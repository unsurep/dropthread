'use client'
import React from 'react';

const Cart = ({ cart, cartOpen, setCartOpen, proceedToCheckout }) => {
  if (!cart || !cartOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      right: '20px',
      top: '20px',
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      zIndex: 1000,
      maxWidth: '400px',
      width: '100%'
    }}>
      <button 
        onClick={() => setCartOpen(false)}
        style={{
          position: 'absolute',
          right: '10px',
          top: '10px',
          border: 'none',
          background: 'none',
          fontSize: '20px',
          cursor: 'pointer'
        }}
      >
        ×
      </button>
      <h3>Shopping Cart</h3>
      {cart.lineItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.lineItems.map(item => (
            <div key={item.id} style={{
              borderBottom: '1px solid #eee',
              padding: '10px 0'
            }}>
              <p>{item.title}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: {item.variant.price}</p>
            </div>
          ))}
          <div style={{
            marginTop: '20px',
            padding: '10px 0',
            borderTop: '1px solid #eee'
          }}>
            <strong>Total: {cart.totalPrice}</strong>
          </div>
          <button
            onClick={proceedToCheckout}
            style={{
              backgroundColor: '#008060',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              width: '100%',
              marginTop: '10px'
            }}
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;