import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function MyNavbar() {
  return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="/">MudTug</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav>
						<Nav.Link href="/teams">Team Management</Nav.Link>
						<Nav.Link href="/matchups">Event Management</Nav.Link>
					</Nav>
					<Nav className="ms-auto">
						<Button href="/registration">Add a New Team</Button>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
  );
}
export default MyNavbar;

