import React from 'react'
import './header.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Images from '../../Images';

import { Link } from 'react-router-dom';


const Header = () => {
  return (
  
    
    <Navbar className='container'>
        
        
        <Link  to='/' ><img className='logo3' src={Images.logo3} alt='logo3'/></Link>
         <div className='div'>

         {/* <Link className='sp' to="/plans">Pricing Plans</Link> */}
         <Link className='btns ' to='/plans' >Pricing Plans</Link>
         <Link className='btns' to='/company'>Company</Link>
         <Link className='btns' to='/contact'>Contact Us</Link>
         
            </div>
           <div className='tags'>
           
            
             <Link to="https://play.google.com/store/apps/details?id=com.fieldforce.ai&pcampaignid=web_share"> <img src={Images.GooglePlay} alt='google' style={{width:'105px', height:'33px'}}/></Link> 
            <Link to="#app"><img className='app' src={Images.AppStore} alt='google' style={{width:'105px', height:'32px'}}/></Link> 

           </div>
      </Navbar>
      
  
  )
}

export default Header
