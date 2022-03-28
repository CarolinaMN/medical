import Carousel from './Carousel';
import { Col, Row, Container } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect, useContext } from 'react';
import { Context } from '../Context';

function Home () {
    const context = useContext(Context);

    return(
        <Container>
            <Row>
                <Col>
                    <h1> Sistema Médico</h1>
                   { !context.authenticated ?  <Carousel></Carousel> : <h5>Ha iniciado sesión</h5>}
                </Col>
            </Row>
        </Container>
    )
}

export default Home;