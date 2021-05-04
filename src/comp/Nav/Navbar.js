import React, { useState, Fragment } from 'react'
import { FaBars } from 'react-icons/fa';
import {
Nav,
NavContainer,
NavLogo,
NavItem,
NavLinks,
NavMenu,
MobileIcon,
} from './NavbarStyles';
import '../../App.css';
const Navbar = () => {
const [colorChange, setColorchange] = useState(false);
const changeNavbarColor = () =>{
	if(window.scrollY >= 80){
	setColorchange(true);
	}
	else{
	setColorchange(false);
	}
};
window.addEventListener('scroll', changeNavbarColor);
return (
	<Fragment>
		<Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
		<NavContainer>
			<NavLogo href="#">GeeksForGeeks</NavLogo>
			<MobileIcon>
			<FaBars />
			</MobileIcon>
			<NavMenu>
				<NavItem>
				<NavLinks href="#">About</NavLinks>
				</NavItem>
				<NavItem>
				<NavLinks href="#">Services</NavLinks>
				</NavItem>
				<NavItem>
				<NavLinks href="#">Events</NavLinks>
				</NavItem>
				<NavItem>
				<NavLinks href="#">Contact</NavLinks>
				</NavItem>
				<NavItem>
				<NavLinks href="#">Sign In</NavLinks>
				</NavItem>
			</NavMenu>
		</NavContainer>
		</Nav>
	</Fragment>
	)
}

export default Navbar;
