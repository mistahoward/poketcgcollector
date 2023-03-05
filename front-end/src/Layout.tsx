import { faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	Col,
	Container, Nav, Navbar, Offcanvas
} from 'react-bootstrap';

import './Layout.css';

const Layout = () => {
	// ! need to put hook here - use bool for debugging
	const signedIn = true;

	const x = 'debug';
	console.debug(x);
	return (
		<Navbar bg="main" expand="lg">
			<Container fluid>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Brand href="#home">PCG</Navbar.Brand>
				<Navbar.Offcanvas id="basic-navbar-nav" placement="start">
					<Offcanvas.Header closeButton>
						<Offcanvas.Title>Menu</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav>
							<Nav.Link disabled href="#action1">Collection</Nav.Link>
							<Nav.Link disabled href="#action2">Shop</Nav.Link>
							<Nav.Link disabled href="#action3">Expansions</Nav.Link>
							<Nav.Link disabled href="#action4">Cards</Nav.Link>
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
				<Navbar.Text className="nav-bar-icon">
					{signedIn
						? <FontAwesomeIcon icon={faCircleUser} />
						: <FontAwesomeIcon icon={faRightFromBracket} /> }
				</Navbar.Text>
			</Container>
		</Navbar>
	);
};

export default Layout;
