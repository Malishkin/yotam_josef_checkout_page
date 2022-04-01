import React from 'react';
import './TopContainer.css';
import sHopify from '../../img/shopify.png';
import rEviews from '../../img/reviews.png';
import sTripe from '../../img/stripe.png';

const TopContainer = () => {
  return (
    <>
      <div className='topContainer'>
        <div className='top-item'>
          <img src={sHopify} className='shopify' alt='' />
        </div>
        <div className='top-item'>
          <img src={rEviews} className='reviews' alt='' />
        </div>
        <div className='top-item'>
          <img src={sTripe} className='stripe' alt='' />
        </div>
      </div>
    </>
  );
};

export default TopContainer;
