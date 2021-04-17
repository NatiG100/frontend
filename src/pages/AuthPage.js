import React from 'react';

import {Form, Col, Button, Card} from 'react-bootstrap';
import getStyle from '../components/utils/bootstrapStyle';
const AuthPage = () => {
    return (
        <Card style={{... getStyle("card"), maxWidth: '600px'}}>
            <Card.Body>
                <Form>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="Your email" />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Author" />
                    </Form.Group>

                    <Button variant="success" type="submit">
                        Login
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default AuthPage;