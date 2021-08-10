import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import "./style.css"
const PublicNav = () => {
    return (
        
<Navbar collapseOnSelect expand="lg" bg="mynav" fixed="top" >
    <Container>
    <Navbar.Brand href="#home">CoderSchool Angel Gifts</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#features">Về CSAG</Nav.Link>
            <Nav.Link href="#pricing">Tạp chí yêu thương</Nav.Link>
            <Nav.Link href="#features">Vận chuyển</Nav.Link>
            <Nav.Link href="#features">Thống kê</Nav.Link>
            
        </Nav>
    </Navbar.Collapse>
    </Container>
</Navbar>

    )
}

export default PublicNav
   