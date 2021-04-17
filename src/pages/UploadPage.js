import React from 'react';
import {Form, Col, Button, Card} from 'react-bootstrap';
import getStyle from '../components/utils/bootstrapStyle';
const UploadPage = () => {
    return (
        <div className="container ">
        <Card style={{... getStyle("card"), maxWidth: '600px'}}>
            <Card.Body>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="title">
                        <Form.Label>Book Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter Title" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="author">
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" placeholder="Author" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Description" />
                    </Form.Group>

                    <Button variant="success" type="submit">
                        <i class="bi bi-upload"></i> Upload
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        </div>
    );
};
export default UploadPage;