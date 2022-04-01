import React from 'react';
import './PaymentSmall.css';
import paYpal from '../../img/PayPal.svg.png';
import vIsa from '../../img/visa.png';
import masterCard from '../../img/mastercard.png';
import aMex from '../../img/amex.png';
import disCover from '../../img/discover.png';
import applePay from '../../img/applePay1.png';
import googlePay from '../../img/Google_Pay_(GPay)_Logo_(2018-2020).svg.png';
import afterPay from '../../img/logo-Afterpay-g-348x174.png';
import oPay from '../../img/opay.png';

const PaymentSmall = () => {
  return (
    <>
      <div className='shippingSmallContainerSubtotalPayment'>
        <div className='step-3-smallSubtotalPayment'>Step 4</div>
        <div className='select-shipping-text-smallSubtotalPayment'>
          Enter Payment Info
        </div>

        <div className='subtotalSmallPayment'>
          <div className='payPalSmall'>
            <div className='round3Small'>
              <input type='radio' name='creditSmall' />
            </div>
            <div className='payWithSmall'>Pay With </div>
            <img src={paYpal} className='payPal-img' alt='' />
          </div>
          <div className='creditCardSmall'>
            <div className='round4Small'>
              <input type='radio'  name='creditSmall' defaultChecked />
            </div>
            <div className='payWithSmall'>Pay With Credit Card</div>
          </div>
          <div className='select-comobox-small2Payment'>
            <div className='firstName3-small2Payment'>
              {' '}
              <span className='enterText1-small2Payment'>Name on Card</span>
              <input type='text' className='enterInput1-small2Payment' />
            </div>
            <div className='firstName3-small2Payment'>
              {' '}
              <span className='enterText1-small2Payment'>Card Number</span>
              <input type='text' className='enterInput1-small2Payment' />
            </div>
            <div className='firstName3-small2Payment'>
              {' '}
              <span className='enterText1-small2Payment'>Expiration Date</span>
              <select
                className='enterInput1-small2Payment'
                name='shipping'
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
            </div>
            <div className='firstName3-small2Payment'>
              {' '}
              <span className='enterText1-small2Payment'></span>
              <select
                className='enterInput1-small2Payment'
                name='shipping'
                id='year-select'
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
                <option value='11'>11</option>
                <option value='12'>12</option>
              </select>
            </div>
            <div className='firstName3-small2Payment'>
            {' '}
            <span className='enterText1-small2Payment'>Security Code</span>
            <input type='text' className='enterInput1-small2Payment2' />
            <a href='#' className='whatsThis'>
                        What's This?
                      </a>
          </div>
          </div>
          <div className='grey-solid-bottomSmallPayment'></div>
          <div className='vizasContainer'>
            <div>
              <img src={vIsa} alt='' className='vizaSmall' />
            </div>
            <div>
              <img src={masterCard} alt='' className='vizaSmall' />
            </div>
            <div>
              <img src={aMex} alt='' className='vizaSmall' />
            </div>
            <div>
              <img src={disCover} alt='' className='vizaSmall' />
            </div>
            <div>
              <img src={applePay} alt='' className='vizaSmall' />
            </div>
            <div>
              <img src={googlePay} alt='' className='vizaSmall' />
            </div>
            <div>
              <img src={afterPay} alt='' className='vizaSmall' />
            </div>
            <div>
              <img src={oPay} alt='' className='vizaSmall' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentSmall;
