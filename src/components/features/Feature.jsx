import React from "react";
import "./feature.css";
import Box from "../../SubComponents/Box/Box";
import Images from "../../Images";




function Feature() { 
  return (
    <div>
      <p className="key-feature">KEY <span style={{color:"#05B2DC"}}>FEATURES</span> 
      <img className="group35" src={Images.Group35} alt="" /> 
      <img className="group36" src={Images.Group36} alt="" /> 

      </p> 
      <div class="contain">
      <Box   image={Images.Heart} title="User Friendly " inter="interface" /> 
      <Box  image={Images.Sales}  title="AI powered " inter="Sales Prediction" />
      <Box  image={Images.Book}  title="Streamlined  " inter="Task managment"/> 
      <Box image={Images.MobileTracking}  title="Real-time Tracking " inter="and Visibility "/>
      <Box  image={Images.Data}  title="Data-driven  " inter="Insights"/> 
      <Box image={Images.Clock}  title="Cost and time " inter="effective"/>
      <Box  image={Images.Multi}  title="Cross platform  " inter="Access"/> 
      <Box image={Images.Layer7}  title="Customizable " inter="and Scalable "/> 
    </div>
    </div>
  );
}

export default Feature;
