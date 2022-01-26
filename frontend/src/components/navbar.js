import React from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
function MyNavbar() {
  return (
		<Navbar
			color="light"
			expand="md"
			light
		>
			<NavbarBrand>
				MudTug
			</NavbarBrand>
			<NavbarToggler onClick={function noRefCheck(){}} />
			<Collapse navbar>
				<Nav
					className="me-auto"
					navbar
				>
					<NavItem>
						<NavLink href="/teams">
							Teams
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/matchups">
							Matchups
						</NavLink>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
  );
}
export default MyNavbar;

