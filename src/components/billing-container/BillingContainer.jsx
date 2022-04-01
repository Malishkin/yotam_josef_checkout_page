import React from 'react';
import './BillingContainer.css';

const BillingContainer = () => {
  return (
    <>
      <div className='billingContainer'>
        <div className='step-billing-item-left'>
          <div className='border-div'>
            <div className='step3_1'>Step 1</div>
            <div className='select-billing-text'>Enter Billing Info</div>
            <div className='border-left'>
              <div className='fields'>
                <label className='enterText'>First Name</label>{' '}
                <input type='text' className='enterInput' />
              </div>
              <div className='fields'>
                <label className='enterText'>Last Name</label>{' '}
                <input type='text' className='enterInput' />
              </div>
              <div className='fields'>
                <label className='enterText'>Best Phone</label>{' '}
                <input type='text' className='enterInput' />
              </div>
              <div className='fields'>
                <label className='enterText'>Best Email</label>{' '}
                <input type='text' className='enterInput' />
              </div>
              <div className='fields'>
                <label className='enterText'>Re-Enter Email</label>{' '}
                <input type='text' className='enterInput' />
              </div>
              <div className='fields'>
                <label className='enterText'>Address</label>{' '}
                <input type='text' className='enterInput' />
              </div>
              <div className='fields'>
                <label className='enterText'>Address 2</label>{' '}
                <input type='text' className='enterInput' />
              </div>
              <div className='fields'>
                <label className='enterText'>City</label>{' '}
                <input type='text' className='enterInput' />
              </div>
              <div className='fields'>
                <label className='enterText'>Zip/Postal</label>{' '}
                <input type='text' className='enterInput' />
              </div>
              <div className='fields'>
                <label className='enterText'>Country</label>
                <select className='enterInput' name='country' id='year-select'>
                  <option value=''></option>
                  <option value='2022'>2022</option>
                  <option value='2023'>2023</option>
                  <option value='2024'>2024</option>
                  <option value='2025'>2025</option>
                  <option value='2026'>2026</option>
                  <option value='2027'>2027</option>
                </select>
              </div>
              <div className='fields'>
                <label className='enterText'>State/Province</label>
                <select className='enterInput' name='state' id='year-select'>
                  <option value=''></option>
                  <option value='2022'>2022</option>
                  <option value='2023'>2023</option>
                  <option value='2024'>2024</option>
                  <option value='2025'>2025</option>
                  <option value='2026'>2026</option>
                  <option value='2027'>2027</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className='step-billing-item-right'>
          <div className='border-div'>
            <div className='step3_1'>Step 2</div>
            <div className='select-billing-text'>Enter Shipping Info</div>
            <div className='round1'>
              <input type='checkbox' defaultChecked id='checkbox1' />
              <label className='label1' htmlFor='checkbox1'></label>
              <span
                className='labelForCheckbox shipping-check'
                htmlFor='checkbox1'
              >
                Check here if shipping & Billing are same
              </span>
            </div>
            <div className='border-right'>
              <div className='fields'>
                <label className='enterText'>First Name</label>{' '}
                <input type='text' className='enterInput' />
              </div>
              <div className='fields'>
                <label className='enterText'>Last Name</label>{' '}
                <input type='text' className='enterInput' />
              </div>

              <div className='fields'>
                <label className='enterText'>Address</label>{' '}
                <input type='text' className='enterInput' />
              </div>
              <div className='fields'>
                <label className='enterText'>Address 2</label>{' '}
                <input type='text' className='enterInput' />
              </div>
              <div className='fields'>
                <label className='enterText'>City</label>{' '}
                <input type='text' className='enterInput' />
              </div>
              <div className='fields'>
                <label className='enterText'>Zip/Postal</label>{' '}
                <input type='text' className='enterInput' />
              </div>
              <div className='fields'>
                <label className='enterText'>Country</label>
                <select className='enterInput' name='country' id='year-select'>
                  <option value=''></option>
                  <option value='2022'>2022</option>
                  <option value='2023'>2023</option>
                  <option value='2024'>2024</option>
                  <option value='2025'>2025</option>
                  <option value='2026'>2026</option>
                  <option value='2027'>2027</option>
                </select>
              </div>
              <div className='fields'>
                <label className='enterText'>State/Province</label>
                <select className='enterInput' name='state' id='year-select'>
                  <option value=''></option>
                  <option value='2022'>2022</option>
                  <option value='2023'>2023</option>
                  <option value='2024'>2024</option>
                  <option value='2025'>2025</option>
                  <option value='2026'>2026</option>
                  <option value='2027'>2027</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillingContainer;
