import React, {useState} from 'react';

import {Form, Button, Card} from 'react-bootstrap';
import getStyle from '../components/utils/bootstrapStyle';
const AuthPage = () => {
    const [isLoginMode, setIsLoginMode] = useState(true);

const clickHandleCreate = (event) => {
    setIsLoginMode(false);
};
const clickHandlerHave = (event) => {
    setIsLoginMode(true);
}
    return (
        <div className="container">
            <Card style={{... getStyle("card"), maxWidth: '600px'}}>
                <Card.Body>
                    <Form>
                        { !isLoginMode &&
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Your name" />
                        </Form.Group>
                        }
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="Your email" />
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Your password" />
                        </Form.Group>

                        {isLoginMode&&
                            <Button variant="success" type="submit">
                                Login
                            </Button>
                        }
                        {!isLoginMode&&
                            <Button variant="success" type="submit">
                                Sign Up
                            </Button>
                        }
                        <Form.Group controlId="switch" className="center">
                            {isLoginMode&&
                                <Button onClick={clickHandleCreate}variant="link">Create an account</Button>
                            }
                            {!isLoginMode&&
                                <Button onClick={clickHandlerHave}variant="link">Already have an account</Button>
                            }
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AuthPage;