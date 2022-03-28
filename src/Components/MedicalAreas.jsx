import React from 'react';
import AxiosInterceptor from '../axios.interceptor';
import { useState, useEffect } from 'react';
import {Form, Button, Container, Row, Col, Table, } from 'react-bootstrap';

function MedicalArea() {

    const [ areas, setAreas ] = useState([]);
    const [ page, setPage ] = useState(0);

    const SIZE = 5;

    useEffect(() => {
        loadAreas();
    }, [page]);

    const loadAreas = () => {
        AxiosInterceptor.get(`/services/serlicitas/api/medical-areas?size=${SIZE}&page=${page}`).then(res => {
            setAreas(res.data);
            let total = res.headers['x-total-count'];
            let totalPage = Math.round(total / SIZE);
        }).catch(error => {});
    }

    const changePage = (num) => {
        setPage(num);
    }

    return( 
        <Container >
            <Row>
                <Col md={10}>
                <h1 style={{textAlign: 'center'}}>Áreas Médicas</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Descripción</th>
                            <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {areas.map((item, i) => 
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td>{item.status}</td>
                                </tr>
                            )}
                            
                        </tbody>
                    </Table>
                    <div>
                     
                            <Button onClick={() => changePage(0)}>1</Button>
                            <Button onClick={() => changePage(1)}>2</Button>
                            <Button onClick={() => changePage(2)}>3</Button>


                        
                    </div>
                </Col>
            </Row>
        </Container>
        
    )

}

export default MedicalArea;