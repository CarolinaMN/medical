import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import Logo from '../Style/images/doc.png'
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../Context';

function Header() {

    // const [authenticated, setAuthenticated] = useState(false);

    const navagate = useNavigate();
    const context = useContext(Context);


    useEffect(() => {        
    }, []);

    const close = () => {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        context.setAuthenticated(false);
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
                    {!context.authenticated ? 
                        <Nav.Link eventkey={2} href="/login">
                            Login
                        </Nav.Link> : 
                        <>
                            <Nav.Link>
                                {context.nameUser}
                            </Nav.Link>
                            <Nav.Link eventkey={2} onClick={close}>
                                Cerrar Sesión
                            </Nav.Link>
                        </>
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;