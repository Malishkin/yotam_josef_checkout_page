import React from 'react';
import './BillingSmall2.css';

const BillingSmall2 = () => {
  return (
    <>
      <div className='shippingSmallContainer2'>
        <div className='step-item3-small2'>
          <div className='borderShipping-small2'>
            <hr className='hrSmall2' />
          </div>
        </div>
        <div className='step-3-small2'>Step 2</div>
        <div className='select-shipping-text-small2'>Enter Shipping Info</div>
        <div className='roundContainer'>
        <div className='round1Small'>
              <input type='checkbox' defaultChecked id='checkbox1Small' />
              <label className='label1Small' htmlFor='checkbox1Small'></label>
             
            </div>
            <label
                className='labelForCheckboxSmall shipping-checkSmall'
                htmlFor='checkbox1Small'
              >
                Check here if shipping & Billing are same
              </label></div>

        <div className='select-comobox-small2'>
          <div className='firstName3-small2'>
            {' '}
            <span className='enterText1-small2'>State/Province</span>
            <select
              className='enterInput1-small2'
              name='shipping'
              id='year-select'
            >
              <option value=''></option>
              <option value='2022'>2022</option>
              <option value='2023'>2023</option>
              <option value='2024'>2024</option>
              <option value='2025'>2025</option>
              <option value='2026'>2026</option>
              <option value='2027'>2027</option>
            </select>
          </div>

          <div className='firstName3-small2'>
            {' '}
            <span className='enterText1-small2'>Country</span>
            <select
              className='enterInput1-small2'
              name='shipping'
              id='year-select'
            >
              <option value=''></option>
              <option value='2022'>2022</option>
              <option value='2023'>2023</option>
              <option value='2024'>2024</option>
              <option value='2025'>2025</option>
              <option value='2026'>2026</option>
              <option value='2027'>2027</option>
            </select>
          </div>

          <div className='firstName3-small2'>
            {' '}
            <span className='enterText1-small2'>Zip/Postal</span>
            <input type='text' className='enterInput1-small2' />
          </div>
          <div className='firstName3-small2'>
            {' '}
            <span className='enterText1-small2'>City</span>
            <input type='text' className='enterInput1-small2' />
          </div>
          <div className='firstName3-small2'>
            {' '}
            <span className='enterText1-small2'>Address 2</span>
            <input type='text' className='enterInput1-small2' />
          </div>
          <div className='firstName3-small2'>
            {' '}
            <span className='enterText1-small2'>Address</span>
            <input type='text' className='enterInput1-small2' />
          </div>
        </div>
      </div>
    </>
  );
};

export default BillingSmall2;
