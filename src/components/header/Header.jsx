import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <>
      <div className='header'>
        <div className='textContainer'>
          <div className='textSmall'>
            <i className='fa fa-check col' aria-hidden='true'></i> 100% Guarantee
          </div>
          <div className='textSmall'>
            <i className='fa fa-check col' aria-hidden='true'></i> 100% Secure
          </div>
          <div className='textSmall'>
            <i className='fa fa-check col' aria-hidden='true'></i> 100% Encrypted
            Checkout
          </div>
          <div className='textSmall' id='questions'>
            <strong>Questions? </strong> 1-888-286-7307
          </div>
          <div className='textSmall2'>Questions? 1-888-286-7307</div>
        </div>
      </div>
    </>
  );
};

export default Header;
