import React from 'react';
import './BillingSmall1.css';

const BillingSmall1 = () => {
  return (
    <>
       <div className='shippingSmallContainer1'>
        <div className='step-item3-small1'>
          <div className='borderShipping-small1'>
            <hr className='hrSmall1' />
          </div>
        </div>
        <div className='step-3-small1'>Step 1</div>
        <div className='select-shipping-text-small1'>Enter Billing Info</div>
        <div className='select-comobox-small1'>
        <div className='firstName3-small1'>
            {' '}
         
          <span className='enterText1-small1'>State/Province</span>
          
            <select
              className='enterInput1-small1'
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
      
          <div className='firstName3-small1'>
            {' '}
           
          <span className='enterText1-small1'>Country</span>
          
            <select
              className='enterInput1-small1'
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
         
          <div className='firstName3-small1'>
            {' '}
         
          <span className='enterText1-small1'>Zip/Postal</span>
          
          <input type='text' className='enterInput1-small1' />
           
          </div>
          <div className='firstName3-small1'>
            {' '}
         
          <span className='enterText1-small1'>City</span>
          
          <input type='text' className='enterInput1-small1' />
           
          </div>
          <div className='firstName3-small1'>
            {' '}
         
          <span className='enterText1-small1'>Address 2</span>
          
          <input type='text' className='enterInput1-small1' />
           
          </div>
          <div className='firstName3-small1'>
            {' '}
         
          <span className='enterText1-small1'>Address</span>
          
          <input type='text' className='enterInput1-small1' />
           
          </div>
          <div className='firstName3-small1'>
            {' '}
         
          <span className='enterText1-small1'>Re-enter Email</span>
          
          <input type='text' className='enterInput1-small1' />
           
          </div>
          <div className='firstName3-small1'>
            {' '}
         
          <span className='enterText1-small1'>Best Email</span>
          
          <input type='text' className='enterInput1-small1' />
           
          </div>
          <div className='firstName3-small1'>
            {' '}
         
          <span className='enterText1-small1'>Best Phone</span>
          
          <input type='text' className='enterInput1-small1' />
           
          </div>
          <div className='firstName3-small1'>
            {' '}
         
          <span className='enterText1-small1'>Last Name</span>
          
          <input type='text' className='enterInput1-small1' />
           
          </div>
          <div className='firstName3-small1'>
            {' '}
         
          <span className='enterText1-small1'>First Name</span>
          
          <input type='text' className='enterInput1-small1' />
           
          </div>
        </div>
      
      </div>
    </>
  );
}

export default BillingSmall1;
