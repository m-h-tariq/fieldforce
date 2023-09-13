import React from 'react'
import './industries.css'
import Images from '../../Images'
import Sales from '../../SubComponents/sales/Sales'

const Industries = () => {
  return (
    <div className='industry'>
        <p className="key-feature">Potential <span style={{color:"#05B2DC"}}>Industries</span>
        <img className="left-1" src={Images.LeftBand1} alt="" /> 
      <img className="left-2" src={Images.LeftBand2} alt="" /> 
      <img className="right-1" src={Images.RightBand1} alt="" /> 
      <img className="right-2" src={Images.RightBand2} alt="" />
      <img className="right-3" src={Images.RightBand3} alt="" />  
       </p>
      <div class="contains">
      <Sales  image={Images.container}  title="Logistic and  " inter="delivery" /> 
      <Sales image={Images.DeliveryBike}  title="Field Sales and " inter="marketing " />
      <Sales  image={Images.Barrier}  title="construction " inter="and Engineering "/> 
      <Sales image={Images.store}  title="Retails and " inter="E-commerce"/>
      <Sales  image={Images.healthcare}  title="Healthcare and " inter="pharmaceuticals"/> 
      <Sales image={Images.Smartcamera}  title="Internet of " inter="things"/>
      <Sales  image={Images.Energy}  title="Energy" inter=""/> 
      <Sales image={Images.Cap}  title="Education" inter=""/>
      <Sales image={Images.Charity}  title="Non-profit" inter=""/> 
      <Sales image={Images.Automotive}  title="Automotive" inter=""/>
      <Sales  image={Images.Bank}  title="Government" inter=""/> 
      <Sales image={Images.Machine}  title="Consumer Goods" inter=" "/>
    </div>
    </div>
  )
}

export default Industries