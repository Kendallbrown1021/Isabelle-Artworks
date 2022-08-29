import React from "react";
import CommissionHero from "../../components/ui/commissions-hero";
import CommissionInfo from "../../components/ui/commissions-info";
import CanvasList from "../../components/ui/canvas-list";
import Details from "../../components/ui/details";
const CommissionsPage = () => {
  return (
    <div>
      <CommissionHero />
      <CommissionInfo />
      <CanvasList />
      <Details />
    </div>
  );
};

export default CommissionsPage;
