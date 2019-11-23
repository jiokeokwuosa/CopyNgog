import React, { useState } from "react";
import Footer from "./Footer";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const MyNav = props => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	return (
		<Router>			
			<Navbar color="light" light expand="md">
				<NavbarBrand>
					<Link to="/"><img src={require('../../assets/img/logo.png')} alt="NGOG logo"/></Link>
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								<Link to="/about">THE NOGIG</Link>
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem>
									<Link to="/medals">Medals History</Link>
								</DropdownItem>								
							</DropdownMenu>
						</UncontrolledDropdown>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								<Link to="/sports">NOGIG SPORTS</Link>
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem>
									<Link to="/athletics">Athletics</Link>
								</DropdownItem>	
								<DropdownItem>
									<Link to="/badminton">Badminton</Link>
								</DropdownItem>	
								<DropdownItem>
									<Link to="/basketBall">Basketball</Link>
								</DropdownItem>	
								<DropdownItem>
									<Link to="/chess">Chess</Link>
								</DropdownItem>	
								<DropdownItem>
									<Link to="/golf">Golf</Link>
								</DropdownItem>	
								<DropdownItem>
									<Link to="/lawnTennis">Lawn Tennis</Link>
								</DropdownItem>							
								<DropdownItem>
									<Link to="/scrabble">Scrabble</Link>
								</DropdownItem>	
								<DropdownItem>
									<Link to="/soccer">Soccer</Link>
								</DropdownItem>	
								<DropdownItem>
									<Link to="/squash">Squash</Link>
								</DropdownItem>	
								<DropdownItem>
									<Link to="/swimming">Swimming</Link>
								</DropdownItem>
								<DropdownItem>
									<Link to="/tableTennis">Table Tennis</Link>
								</DropdownItem>
								<DropdownItem>
									<Link to="/pool">8-Ball Pool</Link>
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								<Link to="/">COMMUNITY</Link>
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem>
									<Link to="/news">Latest News</Link>
								</DropdownItem>								
							</DropdownMenu>
						</UncontrolledDropdown>
						<NavItem>
							<NavLink>
								<Link to="/contact">CONTACTS</Link>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink>
								<Link to="/login">THE PORTAL</Link>
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
			<Switch>
				<Route exact path="/" component={props.Homepage} />
				<Route path="/about" component={props.About} />
				<Route path="/sports" component={props.Sports} />
				<Route path="/contact" component={props.Contact} />
				<Route path="/login" component={props.Login} />
				<Route path="/signup" component={props.Signup} />
				<Route path="/news" component={props.LatestNews} />
				<Route path="/medals" component={props.Medals} />
				<Route path="/athletics" component={props.Athletics} />
				<Route path="/badminton" component={props.Badminton} />
				<Route path="/basketBall" component={props.Basketball} />
				<Route path="/chess" component={props.Chess} />
				<Route path="/golf" component={props.Golf} />
				<Route path="/lawnTennis" component={props.LawnTennis} />
				<Route path="/pool" component={props.Pool} />
				<Route path="/scrabble" component={props.Scrabble} />
				<Route path="/soccer" component={props.Soccer} />
				<Route path="/squash" component={props.Squash} />
				<Route path="/swimming" component={props.Swimming} />
				<Route path="/tableTennis" component={props.TableTennis} />
				<Route path="/register" component={props.Register} />

			</Switch>	
		  <Footer/>
		</Router>
	);
};
export default MyNav;