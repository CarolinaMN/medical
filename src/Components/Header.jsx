import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import Logo from '../Style/images/doc.png'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {

    const [authenticated, setAuthenticated] = useState(false);

    const navagate = useNavigate();


    useEffect(() => {
        let token = localStorage.getItem('token') || sessionStorage.getItem('token');
        if (token) {
            setAuthenticated(true);
        }
    }, [authenticated]);

    const close = () => {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        navagate('/');
    }


    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img
                     src={Logo}
                     width="40"
                     height="40"                    
                     >
                    </img>
                    Sistema Médico</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                    {!authenticated ? 
                        <Nav.Link eventkey={2} href="/login">
                            Login
                        </Nav.Link> : 

                        <Nav.Link eventkey={2} onClick={close}>
                            Cerrar Sesión
                        </Nav.Link>
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;