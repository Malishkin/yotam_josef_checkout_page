import React from 'react';
import './ProcessOrderYes.css';
import processYes from '../../img/process_yes.png';

const ProcessOrderYes = () => {
  return (
    <>
      <div className='process-order-container'>
        <img src={processYes} className='process-img' alt='' />
      </div>
    </>
  );
};

export default ProcessOrderYes;
