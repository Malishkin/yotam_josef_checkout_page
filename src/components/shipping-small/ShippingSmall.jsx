import React from 'react';
import './ShippingSmall.css';

const ShippingSmall = () => {
  return (
    <>
      <div className='shippingSmallContainer'>
        <div className='step-item3-small'>
          <div className='borderShipping-small'>
            <hr className='hrSmall' />
          </div>
        </div>
        <div className='step-3-small'>Step 3</div>
        <div className='select-shipping-text-small'>Select Shipping Method</div>
        <div className='select-comobox-small'>
          <div className='firstName3-small'>
            {' '}
            <span className='enterText1-small'>Shipping</span>
            <select
              className='enterInput1-small'
              name='shipping'
              id='year-select'
            >
              <option value=''>Select</option>
              <option value='2022'>2022</option>
              <option value='2023'>2023</option>
              <option value='2024'>2024</option>
              <option value='2025'>2025</option>
              <option value='2026'>2026</option>
              <option value='2027'>2027</option>
            </select>
          </div>
        </div>
        <div className='step-item3-small'>
          <div className='borderShipping2-small'>
            <hr className='hrSmall' />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingSmall;
