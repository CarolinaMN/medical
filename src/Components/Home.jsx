import Carousel from './Carousel';
import { Col, Row, Container } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';

function Home () {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        let token = localStorage.getItem('token') || sessionStorage.getItem('token');
        if (token) {
            setAuthenticated(true);
        }
    }, []);

    return(
        <Container>
            <Row>
                <Col>
                    <h1> Sistema Médico</h1>
                   { !authenticated ?  <Carousel></Carousel> : <h5>Ha iniciado sesión</h5>}
                </Col>
            </Row>
        </Container>
    )
}

export default Home;