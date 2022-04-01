import React from 'react';
import './PaymentInfoContainer.css';
import paYpal from '../../img/PayPal.svg.png';
import vIsa from '../../img/visa.png';
import masterCard from '../../img/mastercard.png';
import aMex from '../../img/amex.png';
import disCover from '../../img/discover.png';
import applePay from '../../img/applePay1.png';
import googlePay from '../../img/Google_Pay_(GPay)_Logo_(2018-2020).svg.png';
import afterPay from '../../img/logo-Afterpay-g-348x174.png';
import oPay from '../../img/opay.png';

const PaymentInfoContainer = () => {
  return (
    <>
      <div className='paymentInfoContainer'>
        <div className='step-item1'>
          <div style={{ width: '80%', marginBottom: '50px' }}>
            <hr style={{ color: '#b3b3b3' }} />
          </div>
          <div className='step-4'>Step 4</div>
          <div className='payment-info'>Enter Payment Info</div>
          <div className='payment-border'>
            <div className='payPal'>
              <div className='round3'>
                <input type='radio' name='credit' />
              </div>
              <div className='payWith'>Pay With </div>
              <img src={paYpal} className='payPal-img' alt='' />
            </div>
            <div className='creditCard'>
              <div className='round4'>
                <input type='radio' defaultChecked name='credit' />
                <div className='payWithCreditCard'>Pay With Credit Card</div>
                <div className='cards-container'>
                  <img src={vIsa} className='visa' alt='' />
                  <img src={masterCard} className='visa' alt='' />
                  <img src={aMex} className='visa' alt='' />
                  <img src={disCover} className='visa' alt='' />
                  <img src={applePay} className='visa' alt='' />
                  <img
                    src={googlePay}
                    className='visa'
                    alt=''
                  />
                  <img
                    src={afterPay}
                    className='afterPay'
                    alt=''
                  />
                  <img src={oPay} className='visa' alt='' />
                </div>

                <div className='name-card-namber-container'>
                  <div className='payment-col-left'>
                    <div className='firstName2'>
                      <span className='enterText1'>Name on Card</span>{' '}
                      <input type='text' className='enterInput1' />
                    </div>
                    <div className='firstName2'>
                      <span className='enterText1'>Expiration Date</span>{' '}
                      <select
                        className='enterYear'
                        name='years'
                        id='year-select'
                      >
                        <option value=''>Year</option>
                        <option value='2022'>2022</option>
                        <option value='2023'>2023</option>
                        <option value='2024'>2024</option>
                        <option value='2025'>2025</option>
                        <option value='2026'>2026</option>
                        <option value='2027'>2027</option>
                      </select>
                      <select
                        className='enterYear'
                        name='months'
                        id='month-select'
                      >
                        <option value=''>Month</option>
                        <option value='01'>01</option>
                        <option value='02'>02</option>
                        <option value='03'>03</option>
                        <option value='04'>04</option>
                        <option value='05'>05</option>
                        <option value='06'>06</option>
                        <option value='07'>07</option>
                        <option value='08'>08</option>
                        <option value='09'>09</option>
                        <option value='10'>10</option>
                        <option value='11'>11</option>
                        <option value='12'>12</option>
                      </select>
                    </div>
                  </div>
                  <div className='payment-col-right'>
                    <div className='firstName2'>
                      <span className='enterText1'>Card Number</span>{' '}
                      <input type='text' className='enterInput1' />
                    </div>
                    <div className='firstName2'>
                      <span className='enterText2'>Security Code</span>{' '}
                      <input type='text' className='enterSecurity' />
                      <a href='#' className='whatsThis'>
                        What's This?
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default PaymentInfoContainer;