import React from 'react';
import './SubtotalSmall.css';

const SubtotalSmall = (props) => {
  return (
    <>
      <div className='shippingSmallContainerSubtotal'>
        <div className='step-3-smallSubtotal'>Step 5</div>
        <div className='select-shipping-text-smallSubtotal'>
          Confirm Your Order
        </div>

        <div className='subtotalSmall'>
          <div className='subtotal-textSmall'>Subtotal</div>
          <div className='borderBottomSmall'> </div>
          <div className='subtotal-priceSmall'>{props.total}</div>

          <div className='subtotal-text2Small'>Shipping</div>
          <div className='borderBottom2Small'> </div>
          <div className='subtotal-price2Small'>$00.00</div>

          <div className='subtotal-text3Small'>Total</div>
          <div className='borderBottom3Small'> </div>
          <div className='subtotal-price3Small'>{props.total}</div>

          <div className='grey-solid-bottomSmall'></div>

          <div className='bottomTextSmall'>
            Note: The charge will appear on your card as CuraLife
          </div>
        </div>
      </div>
    </>
  );
};

export default SubtotalSmall;
