import React from 'react'
import './Form.css';
import Images from '../../Images';

const Form = () => {
  return (
    <>
    <div>
        <p className='main-content text-center'>Contact Us</p>
        <p className='text-center child-content'>Any question or remarks? Just write us a message!</p>
    </div>
    <div className='contact-information container'>
        <div className='provide-information'>
            <p className='information'>Contact Information</p>
            <p className='say-something'>Say something to start a live chat!</p>
            <div className='information-pics'>
                <div className='image-text'>
            <img src={Images.Phone_Call} alt='' className='phone-pic' />
            <span className='only-text'>+1012 3456 789</span>
            </div>
            <div className='email-text'>
            <img src={Images.Email} alt=''className='email-pic'/>
            <span className='only-email'>demo@gmail.com </span>
            </div>
            <div className='location-text'>
            <img src={Images.Location} alt='' className='location-pic'/>
            <span className='only-location'>132 Dartmouth Street Boston, Massachusetts 02156 United States</span>
            </div>
            </div>
            <img src={Images.Facebook} alt='' style={{width:"20px", height:"20px"}} className='facebook-logo'/>
            <img src={Images.Twitter} alt='' style={{width:"20px", height:"20px"}} className='twitter-logo'/>
            <img src={Images.instagram} alt='' style={{width:"20px", height:"20px"}} className='instagram-logo'/>
        </div>
        <div className='left-form'>
            <form>
                <label style={{color:"#8D8D8D"}}>First Name</label> <br /> 
                <input type='text' style={{border:"none"}}></input> 
                <hr className='first-hr'/>
                <div className='last-name'>
                <label style={{color:"#8D8D8D"}}>Last Name</label> <br /> 
                <input type='text' style={{border:"none"}}></input> 
                <hr className='second-hr'/>
                </div><br />

                <label style={{color:"#8D8D8D"}}>Email</label> <br /> 
                <input type='email' style={{border:"none"}}></input> 
                <hr className='first-hr'/>

                <div className='phone-nmb'>
                <label style={{color:"#8D8D8D"}}>Phone Number</label> <br /> 
                <input type='phone' style={{border:"none"}}></input> 
                <hr className='third-hr'/>
                </div>
       <br />
<p className='message'>Message</p>
<input type='text' placeholder='Write your message..' style={{border:"none", color:"#8D8D8D"}}></input> 
                <hr className='last-hr'/> <br /><br />
                <button className='feature '>Send Message</button>
                </form> 
        </div>
    </div>
    </>
  )
}

export default Form