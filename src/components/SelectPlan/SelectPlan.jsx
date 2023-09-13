import React from "react";
import StandardComponent from "../../SubComponents/Standards/Standard"; // Renamed the import
import Images from "../../Images";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./SelectPlan.css";

const SelectPlan = ({ yearlySelected }) => {
  const standardMonthlyCost = 20; // Renamed the variable
  const extendedMonthlyCost = 32; // Renamed the variable
  const premiumMonthlyCost = 46 ; // Renamed the variable
  
  const standardYearlyCost = standardMonthlyCost * 10;
  const extendedYearlyCost = extendedMonthlyCost * 10;
  const premiumYearlyCost = premiumMonthlyCost * 10;

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <StandardComponent // Changed the variable name here
              Chose_plan="Standard"
              Coin="The national average cost of buying coin easy."
              Cost={`$${yearlySelected ? standardYearlyCost : standardMonthlyCost}`}
              Per="/month"
              Finally_select="Select Plan"
              Logo={Images.Group_tik}
              Collection="5 collections"
              Access="Worldwide accessbility "
              Action="25 automation actions"
              line="c"
              Feature="Access all features"
              Support="24 hours support"
              Blank={Images.Blank_tik}
              Devices="Sync accross devices"
              Users="Share with more 5 users"
            />
          </Col>
          <Col>
            <StandardComponent // Changed the variable name here
              Class="main"
              Change="color"
              Change_cost_Color="dollor"
              Chose_plan="Extended"
              Coin="The national average cost of buying coin easy."
              Cost={`$${yearlySelected ? extendedYearlyCost : extendedMonthlyCost}`}
              Per="/month"
              Finally_select="Select Plan"
              Logo={Images.White_tik}
              Collection="Unlimited collections"
              Access="Worldwide accessbility "
              Action="Unlimited automation actions"
              Feature="Access all features"
              Support="24 hours support"
              Blank={Images.White_tik}
              Devices="Sync accross devices"
              Users="Share with more 5 users"
              className="change_color"
            />
          </Col>
          <Col>
            <StandardComponent // Changed the variable name here
              Chose_plan="Premium+"
              Coin="The national average cost of buying coin easy."
              Cost={`$${yearlySelected ? premiumYearlyCost : premiumMonthlyCost}`}
              Per="/month"
              Finally_select="Select Plan"
              Logo={Images.Group_tik}
              Collection="Unlimited collections"
              Access="Worldwide accessbility "
              Action="Unlimited automation actions"
              Feature="Access all features"
              Support="24 hours support"
              Blank={Images.Group_tik}
              Devices="Sync accross devices"
              Users="Share with more 10 users"
            />
          </Col>
        </Row>
      </Container>
      <img className="back_1" src={Images.back_1} alt="" />
      <img className="back_2" src={Images.back_2} alt="" />
      <img className="back_3" src={Images.back_3} alt="" />
    </div>
  );
};

export default SelectPlan;
