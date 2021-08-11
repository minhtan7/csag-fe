import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './style.css';
const PublicNav = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="mynav" fixed="top">
			<Container>
				<Navbar.Brand href="/">CoderSchool Angel Gifts</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/">Về CSAG</Nav.Link>
						<Nav.Link href="/blog">Tạp chí yêu thương</Nav.Link>
						<Nav.Link href="/shipper">Vận chuyển</Nav.Link>
						<Nav.Link href="/">Thống kê</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default PublicNav;
