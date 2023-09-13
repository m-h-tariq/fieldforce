import React from 'react';
import './card.css';
import Images from '../../Images';

const Card = () => {
  return (
    
     
    <div className='main-div'>
      <marquee behavior="scroll" direction="left" scrollamount= '10' >
       
       <img className='marquee-item' src={Images.VisionSpring} alt="visionSpring" width="276" height="74" />
       <img className='marquee-item' src={Images.Fannex} alt="fannex" width="259" height="74" />
        <img className='marquee-item' src={Images.Fin360} width="294" height="74" alt="Natural" />
       <img className='marquee-item' src={Images.RafhyApparel} alt="Apparel" width="185" height="74"/>
       <img className='marquee-item' src={Images.DoLocal} alt="DoLocal" width="163" height="74"/>
       <img className='marquee-item' src={Images.Mammoth} alt="Mammoth" width="132" height="74" />
       <img className='marquee-item' src={Images.Tijarat} alt="Tijarat" width="110" height="74" />
       <img className='marquee-item' src={Images.Fabrics} alt="Fabrics" width="163" height="74" />
       <img className='marquee-item' src={Images.BioCare} alt="BioCare" width="281" height="74" />
       <img className='marquee-item' src={Images.DeepBlue} alt="DeepBlue" width="74" height="74" />
       <img className='marquee-item' src={Images.Pillar} alt="Pillar" width="187" height="74" />   
       <img className='marquee-item' src={Images.YellowStone} alt="Pillar" width="105" height="74" />  
      
       <img className='marquee-item' src={Images.VisionSpring} alt="visionSpring" width="276" height="74" />
       <img className='marquee-item' src={Images.Fannex} alt="fannex" width="259" height="74" />
       <img className='marquee-item' src={Images.Fin360} width="294" height="74" alt="Natural" />
       <img className='marquee-item' src={Images.RafhyApparel} alt="Apparel" width="185" height="74"/>
       <img className='marquee-item' src={Images.DoLocal} alt="DoLocal" width="163" height="74"/>
       <img className='marquee-item' src={Images.Mammoth} alt="Mammoth" width="132" height="74" />
       <img className='marquee-item' src={Images.Tijarat} alt="Tijarat" width="110" height="74" />
       <img className='marquee-item' src={Images.Fabrics} alt="Fabrics" width="163" height="74" />
       <img className='marquee-item' src={Images.BioCare} alt="BioCare" width="281" height="74" />
       <img className='marquee-item' src={Images.DeepBlue} alt="DeepBlue" width="74" height="74" />
       <img className='marquee-item' src={Images.Pillar} alt="Pillar" width="187" height="74" />   
       <img className='marquee-item' src={Images.YellowStone} alt="Pillar" width="105" height="74" /> 
       </marquee>
       
        
    </div>
    
   
  )
} 

export default Card