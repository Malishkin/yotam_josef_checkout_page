import React from 'react';
import './Navbar.css';
import navLogo from '../../img/1.png';

const Navbar = () => {
  return (
    <>
      <div className='navBar'>
        <div className='certified'>
          <img src={navLogo} className='emblem2' alt='' /> CERTIFIED 100% SAFE &
          SECURE CHECKOUT
        </div>
        <div className='certified2'>
          <img src={navLogo} className='emblem2' alt='' /> SECURE ORDER FORM
        </div>
      </div>
    </>
  );
};

export default Navbar;
