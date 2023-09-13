import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './BigEntities.css';
import Images from '../../Images';

const BigEntities = () => {
  return (
    <>
    <div className='big-entities'>
    <Container>
      <Row>
        <Col sm={7}>
        <p className='leading'>As Big Entities, we are a leading technology company committed to delivering cutting-edge solutions that drive business growth and efficiency. We leverage the power of emerging technologies to transform industries, streamline operations, and empower organizations to achieve their goals.</p>
        <button className='feature mt-4'>Visit our website</button>
        </Col >
        <Col sm={5} className="Big_Entities_logo">
            
            <img src={Images.Big_Entities} alt='' className='entities'/>
        </Col>
      </Row>
      
    </Container>
    </div>
    </>
  )
}

export default BigEntities