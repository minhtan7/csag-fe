import React from 'react';
// import motobike from "../../image/shipper12.png";
// import freeshipping from "../../image/shipping.jpeg";
import './Style.css';
import { Carousel } from 'react-bootstrap';

const ShipmentSlider = () => {
	return (
		<div>
			<Carousel>
				<Carousel.Item>
					{/* <img
            className="d-block w-100 slider-img"
            src={motobike}
            alt="First slide"
          /> */}
					<Carousel.Caption></Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					{/* <img
            className="d-block w-100 slider-img"
            src={freeshipping}
            alt="First slide"
          /> */}
					<Carousel.Caption></Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default ShipmentSlider;
