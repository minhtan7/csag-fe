import React from "react";
import { Button } from "react-bootstrap";
import Map from "../../components/Map/Map";
import "./style.css"



const Hompage = () => {
  const handleOnClick = (e) => {

  }
 
  return ( 
  <div id="map-container">
  <Map />
  
  <div className="join-button">
        <Button variant="dark" size="lg" onClick={handleOnClick}>Tôi muốn tham gia</Button>
    </div>
  </div>
  );
};

export default Hompage;



