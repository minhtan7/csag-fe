import React from "react";
import PublicNavbar from "../components/PublicNavabar/PublicNavbar";
import SearchForm from "../components/SearchFrom/SearchForm";

import ShipmentCard from "../components/ShipmentCard/ShipmentCard";
import ShipmentSlider from "../components/ShipmentSlider";

const ShipperPage = () => {
  return (
    <>
      <PublicNavbar />
      <ShipmentSlider />
      <SearchForm />
      <ShipmentCard />
      <ShipmentCard />
      <ShipmentCard />
      <ShipmentCard />
      <ShipmentCard />
    </>
  );
};

export default ShipperPage;
