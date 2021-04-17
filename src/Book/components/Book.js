import React,{useState} from 'react';
import {
    Card, 
    Button, 
    ListGroup, 
    Col, 
    Row,
    Accordion,
    useAccordionToggle
} from 'react-bootstrap';

import Rate from'../../components/UIElements/Rate';
import getStyle from '../../components/utils/bootstrapStyle';

const Book = props => {
    const[isUp,setIsUp]=useState(true);
    function CustomToggle({children, eventKey}){
        const decoratedOnClick = useAccordionToggle(eventKey, ()=>
            setIsUp(!isUp)
        );
        return (
            <Button 
                variant="light" 
                style={{borderRadius: '100px'}}
                onClick={decoratedOnClick}
            >
                {children}
            </Button>
        );
    }
    return (
        <Card  style={getStyle("card")}>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title>
                    {props.title}
                </Card.Title>
                <Row>
                    <Col xs={8}>
                        <ListGroup variant="flush">
                            <ListGroup.Item><b>Author(s):</b> Dummy Author</ListGroup.Item>
                            <ListGroup.Item><b>Publication Date:</b> 12/45/45</ListGroup.Item>
                            <ListGroup.Item><b>Size(MB):</b> 12</ListGroup.Item>
                            <ListGroup.Item><b>File Type:</b> PDF</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <Card.Img 
                            style={{
                                display: 'block',
                                maxWidth: '140px',
                                maxHeight: '204px',
                                width: 'auto',
                                height: 'auto'
                            }}
                            variant="center" 
                            src="https://codex.cs.yale.edu/avi/os-book/images/os9c-cover.jpg" 
                        />
                    </Col>
                </Row>
                
                <Accordion defaultActiveKey="0" style={{marginTop: '15px',marginBottom: '15px'}}>
                    <Card style={{border: '0px'}}>
                        <CustomToggle eventKey="1">
                            {isUp && <i class="bi bi-caret-down-fill"></i>} 
                            {!isUp && <i class="bi bi-caret-up-fill"></i> }
                            Description
                        </CustomToggle>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <Card.Text style={{ textAlign: 'justify', textJustify: 'inter-word'}}>
                                {props.description}
                            </Card.Text>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                    
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Rate />
                    </ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Button variant="outline-success" style={{margin: '10px'}}><i class="bi bi-download"></i> DOWNLOAD</Button>
                    <Button variant="outline-info" style={{margin: '10px'}}><i class="bi bi-pen"></i> EDIT</Button>
                    <Button variant="outline-danger" style={{margin: '10px'}}><i class="bi bi-trash"></i> DELETE</Button>
                    <Button variant="outline-primary" style={{margin: '10px', float:'right'}}>{props.linkTxt}</Button>
                </Card.Body>
            </Card.Body>
        </Card>
    );
};
export default Book;