import React from 'react';
import { useSelector } from 'react-redux';

const SingleCart = () => {
  const cart = useSelector(state => state.cart.cart); 

  return (
    <div style={{ padding: '20px', fontSize: '20px' }}>
      Cart Items: {cart.length}
    </div>
  );
};

export default SingleCart;
