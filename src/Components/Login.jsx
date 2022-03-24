import React from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AxiosInterceptor from '../axios.interceptor';

function Login() {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const navegate = useNavigate();
    
    const login = (event) => {
        event.preventDefault();
        let data = {
            "username": username,
            "password": password,
            "rememberMe": rememberMe
        }

        AxiosInterceptor.post('/api/authenticate', data).then(res => {

            if (rememberMe === true) {
                localStorage.setItem('token', res.data.id_token);
            } else {
                sessionStorage.setItem('token', res.data.id_token);
            }
            navegate('/');
        }).catch(error => {
            console.log("Error");
        })
    }
    

    return(
            <Container style={{textAlign: 'center'}} >
                <Row className="login">
                    <Col md={3}>
                        <img 
                            width="150"
                            height="150"
                            src={require('../Style/images/user.png')}>
                        </img>
                        <h2>Login</h2>
                        <Form onSubmit={login}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Usuario" value={username} onChange={(e) => setUserName(e.target.value)} required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Contraseña" value={password}  onChange={(e) => setPassword(e.target.value)} required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} label="Recordar" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Ingresar
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
    
    )
}

export default Login;