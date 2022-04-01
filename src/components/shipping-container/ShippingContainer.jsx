import React from 'react';
import './ShippingContainer.css';

const ShippingContainer = () => {
  return (
    <>
       <div className="shippingMethodContainer">
    <div className="step-item3">
      <div className='borderShipping' >
        <hr />
      </div>
      <div className="step-3">Step 3</div>
      <div className="select-shipping-text">Select Shipping Method</div>
      <div className="select-comobox">
        <div className="firstName3"> <span className="enterText1">Shipping</span>
          <select className="enterInput1" name="shipping" id="year-select">
            <option value="">Select</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
          </select>
        </div>
      </div>
    </div>

  </div>
    </>
  );
}

export default ShippingContainer;
