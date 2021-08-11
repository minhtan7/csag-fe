import React from 'react';
import motobike from '../../image/shipper12.png';
import freeshipping from '../../image/shipping.jpeg';
import './Style.css';
import { Carousel } from 'react-bootstrap';

const ShipmentSlider = () => {
	return (
		<div>
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://images.unsplash.com/photo-1572195577046-2f25894c06fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
						alt="First slide"
					/>
					<Carousel.Caption></Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={`https://images.unsplash.com/photo-1512909006721-3d6018887383?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80`}
						alt="First slide"
					/>
					<Carousel.Caption></Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default ShipmentSlider;
