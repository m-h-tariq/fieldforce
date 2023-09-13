import React from 'react'
import Header from '../header/Header'
import './PricingPlans.css';
import Images from '../../Images';



const PricingPlans = ({ yearlySelected, setYearlySelected }) => {
  

 
  return (
    <>
     
    <div className='perfect_plan'>
      <img src={Images.Pattern} alt='pattern' className='pattern'/>
      <div className='find'>
        <p className='top'>Find Your Perfect Plan</p>
        </div>
        <div className='ideal_plan'>
          <p>Discover the ideal plan to fuel your business growth. Our pricing options are carefully crafted to cater to businesses.</p>
        
        {/* <div className='button_div'>
          <button className='btn_none'>Monthly</button>
        <button className='btn_none'>Yearly</button>
        </div> */}
        <div class="pricing-toggle">
  <input type="radio" id="pricing-toggle-monthly" name="pricing" value="monthly" checked={!yearlySelected}  onChange={() => setYearlySelected(false)}/>
  <label class="radio-button"htmlFor="pricing-toggle-monthly">Monthly</label>

  <input type="radio" id="pricing-toggle-annually" name="pricing" value="annually"  checked={yearlySelected} onChange={() => setYearlySelected(true)}/>
  <label class="radio-button"  htmlFor="pricing-toggle-annually">Yearly</label>
</div>

<div id="out"/>
      </div>
      
    </div>
    </>
  )
}

export default PricingPlans