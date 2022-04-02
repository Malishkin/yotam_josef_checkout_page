import React, {useState} from 'react';
import './PreferContainer.css';
import threeBottles from '../../img/2.png';
import curvedArrow from '../../img/curved-arrow.png';
import SubTotalContainer from '../subtotal-container/SubTotalContainer';
import SubtotalSmall from '../subtotal-small-step/SubtotalSmall';

const PreferContainer = () => {
  const [total, setTotal] = useState('$37.00');
  
  const [checked, setChecked]= useState(false)
  const handleChange = ()=>{
    setChecked(!checked);
    if(!checked){
      setTotal('$87.00');
    }else {
      setTotal('$37.00')
    }
  }
  return (
    <>
    <SubTotalContainer total={total}/>
      <div className='prefer-container'>
        <div className='prefer-border'>
          <img src={threeBottles} className='three-bottles' alt='' />
          <div className='prefer-text'>Prefer to Save Time & Money?</div>
          <div className='save-bar'>
            <img src={curvedArrow} className='curved-arrow' alt='' />
            <div className='save-title'>Save $8 per bottle</div>
          </div>
          <div className='round'>
            <input type='checkbox' id='checkbox'onChange={handleChange} />
            <label htmlFor='checkbox'></label>
          </div>
          <div className='check-text'>
            When you check this box, your order will be upgraded to a CuraLin 3
            Pack, saving you time in reordering,{' '}
            <strong>and 10% off your order.</strong> <br /> You are still
            protected by our money back guarantee.
          </div>
        </div>
      </div>

      <div className='prefer-container-small'>
        <div className='prefer-border-small'>
          <img src={threeBottles} className='three-bottles-small' alt='' />
          <div className='prefer-text-small'>Prefer to Save Time & Money?</div>
          <div className='save-bar-small'>
            <img src={curvedArrow} className='curved-arrow-small' alt='' />
            <div className='save-title-small'>Save $8 per bottle</div>
          </div>
          <div className='round2'>
            <input type='checkbox' id='checkbox2' onChange={handleChange}/>
            <label htmlFor='checkbox2'></label>
          </div>
          <div className='check-text-small' >
            When you check this box, your order will be upgraded to a CuraLin 3
            Pack, saving you time in reordering,{' '}
            <strong>and 10% off your order.</strong> <br /> You are still
            protected by our money back guarantee.
          </div>
        </div>
      </div>
      <SubtotalSmall total={total}/>
    </>
  );
};

export default PreferContainer;
