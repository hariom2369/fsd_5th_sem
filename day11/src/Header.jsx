import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>MyApp</div>

      <div style={{ display: 'flex', gap: '25px' }}>
        <div onClick={() => navigate('/')}>Home</div>

        <div onClick={() => navigate('/products')}>
          Products
        </div>

        <div onClick={() => navigate('/about')}>About</div>

        <div onClick={() => navigate('/cart')}>Cart</div>
      </div>
    </div>
  );
};

export default Header;