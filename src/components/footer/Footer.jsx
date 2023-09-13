import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './footer.css'
import Images from '../../Images'

const Footer = () => {
  const getCurrentYear = () => {
    const currentDate = new Date();
    return currentDate.getFullYear();
  };

  const currentYear = getCurrentYear();
  return (
    <div className='footer'>
      
      <Link  to='/' ><img className='group31' src={Images.Group31} alt='logo3'/></Link><br />
    
    <div className='google'>
   <Link to="https://play.google.com/store/apps/details?id=com.fieldforce.ai&pcampaignid=web_share"> <img src={Images.GooglePlay} alt='google' style={{width:'105px', height:'33px'}}/></Link> 
            <Link to="#app"><img className='app' src={Images.AppStore} alt='google' style={{width:'105px', height:'32px'}}/></Link> 
     </div>
     <div>
     <img className='rectangle27' src={Images.Rectangle27} alt="" />
     <img className='rectangle26' src={Images.Rectangle26} alt="" />
     </div>
     <div className='foot'>
            
     <Link className='fp ' to='/plans' >Pricing Plans</Link>
         <Link className='fp' to='/company'>Company</Link>
         <Link className='fp' to='/contact'>Contact Us</Link>
            </div>
            <div className='logo'>
     <img className='facebook' src={Images.Facebook} alt="" />
     <img className='twitter' src={Images.Twitter} alt="" />
     <img className='instagram' src={Images.instagram} alt="" />
     </div>
     <p className='copy'>
     © Copyright {currentYear} - FieldForce.AI
     </p>
  </div>
  )
}

export default Footer