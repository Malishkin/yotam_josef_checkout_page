import React from 'react';
import './SubTotalContainer.css';
import freeShiping from '../../img/free-shiping.png';

const SubTotalContainer = () => {
  return (
    <>
    
    <div className="subtotal-container">
    <img src={freeShiping} className="bottle" alt=""/>
    <div className="subtotal">
      <div className="subtotal-text">Subtotal</div>
      <div className="borderBottom"> </div>
      <div className="subtotal-price">$37.00</div>

      <div className="subtotal-text2">Shipping</div>
      <div className="borderBottom2"> </div>
      <div className="subtotal-price2">$00.00</div>

      <div className="subtotal-text3">Total</div>
      <div className="borderBottom3"> </div>
      <div className="subtotal-price3">$37.00</div>

      <div className="grey-solid-bottom"></div>



      <div className="bottomText">Note: The charge will appear on your card as CuraLife</div>


    </div>
  </div>
      
    </>
  );
}

export default SubTotalContainer;
