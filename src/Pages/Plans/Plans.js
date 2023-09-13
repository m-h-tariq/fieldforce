import React, { useState } from 'react';
import PricingPlans from '../../components/PricingPlans/PricingPlans';
import SelectPlan from '../../components/SelectPlan/SelectPlan';
import Testimotional from '../../components/testimotional/Testimotional';
// import Idea from '../../SubComponents/Zahid/Idea';


const Plans = () => {
  const [yearlySelected, setYearlySelected] = useState(false);

  return (
    <>
      <PricingPlans yearlySelected={yearlySelected} setYearlySelected={setYearlySelected} />
      <SelectPlan yearlySelected={yearlySelected} />
      {/* <Idea /> */}
      <Testimotional
        firstText="See What Other"
        midText="Client"
        lastText="Are Saying"
      />
    </>
  );
}

export default Plans;
