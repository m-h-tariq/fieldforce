import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Task.css'
import Images from '../../Images';

const Task = () => {
  return (
    <Container>
    <Row>
      <Col sm={4}className='container mt-5'>
        <div className='task'>
        <h2><b>EFFICIENT TASK </b> </h2>
         <h2><b>MANAGEMENT AND</b></h2>
         <h2><b><u className='under'>INTELLIGENT</u> SALES</b></h2>
         <h2><b>PREDICTION</b></h2>
         </div>
        <p className='ext'>
        FieldForce.AI is a comprehensive mobile and desktop app designed to optimize field operations and empower businesses to achieve greater productivity and sales success.
        </p>
        
        
        <button className='feature '>DISCOVER OUR FEATURES</button>
        <div className="watch">
  <div className="text play-button"> WATCH VIDEO</div>
</div>

         {/* <button className='video btn1 '><img className='circle' src={Images.Circle} alt=''></img>WATCH VIDEO</button>  */}
        

      </Col>
      <Col sm={8}>
      <div className='design'>
       
        <video className='thumbnail' loop autoPlay muted>
          <source src={Images.Field_Force}  type='Video/mp4'/>
        </video>
         <img className='group' src={Images.Group} alt="group" />
        <img className='group2' src={Images.Group2} alt="group2" /> 


     
     

      </div>
     
    </Col>

    </Row>
    
    
    </Container>
    
  )
}

export default Task