import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
function MyNavbar() {
  return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="/">MudTug</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link href="/teams">Team Management</Nav.Link>
						<Nav.Link href="/matchups">Event Management</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
  );
}
export default MyNavbar;

