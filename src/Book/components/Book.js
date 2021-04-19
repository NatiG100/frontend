import React,{useState, useEffect} from 'react';
import {Form, Modal} from 'react-bootstrap';
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

    //states for validation
    const [description, setDescription] = useState({value:"", isValid:false});
    const [title, setTitle] = useState({value:"", isValid:false});
    const [titleIsBlur, setTitleIsBlur] = useState(false);
    const [descriptionIsBlur, setDescriptionIsBlur] = useState(false);

    //states for modals for edit and delete
    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    //state for description accordion
    const[isUp,setIsUp]=useState(true);

    //functions for handling and validating inputs
    const titleChangeHandler = (event) => {
        if(event.target.value.length >= 1){
            setTitle({value:event.target.value, isValid:true})
            console.log(title);
            return;
        }
        setTitle({value:event.target.value, isValid:false})
        console.log(title);
    };
    const descriptionChangeHandler = (event) => {
        if(event.target.value.length >= 10){
            setDescription({value:event.target.value, isValid:true})
            const desc= description;
            console.log(desc);
            return;
        }
        setDescription({value:event.target.value, isValid:false})
        const desc= description;
        console.log(desc);
    };
    const titleBlurHandler = () => {
        setTitleIsBlur(true);
    };
    const descriptionBlurHandler = () => {
        setDescriptionIsBlur(true);
    };

    //a function for toggling the description accordion
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


    //handlers for showing and hiding delete and edit modals
    const editClickHandler = () => {
        setShowEdit(true)
    };
    const hideEdit = () => {
        setShowEdit(false);
        setDescription({value:"", isValid:false});
        setTitle({value:"", isValid:false});
        setTitleIsBlur(false);
        setDescriptionIsBlur(false);
    };
    const deleteClickHandler = () => {
        setShowDelete(true)
    };
    const hideDelete = () => {
        setShowDelete(false);
    };
    return ( 
        <React.Fragment>

            {/* edit modal begins */}
            <Modal 
                show={showEdit} 
                onHide={hideEdit} 
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text" 
                                placeholder="Title" 
                                onChange={titleChangeHandler}
                                onBlur={titleBlurHandler} 
                                aria-describedby="titleHelp"    
                            />
                            {(titleIsBlur && !title.isValid) && <Form.Text id="titleHelp" muted>
                                <div style={{color: 'rgb(245,75,60)'}}>The Title must have at least 1 character</div>
                            </Form.Text>}
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                placeholder="Description" 
                                onChange={descriptionChangeHandler}
                                onBlur={descriptionBlurHandler} 
                            />
                            {(descriptionIsBlur && !description.isValid) && <Form.Text id="titleHelp" muted>
                                <div style={{color: 'rgb(245,75,60)'}}>The Description must have at least 10 character</div>
                            </Form.Text>}
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" disabled={!(title.isValid&&description.isValid)}type="submit">Save Changes</Button>
                    <Button variant="success" onClick={hideEdit}>Cancel</Button>
                </Modal.Footer>
            </Modal>
            {/* edit modal ends */}


            {/* Delete modal begins */}
            <Modal 
                show={showDelete} 
                onHide={hideDelete} 
                centered 
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete Book <i className="fas fa-exclamation-triangle" style={{color:'#e84545'}}></i>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body> Are you sure? you want to delete?</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger">YES</Button>
                    <Button variant="success" onClick={hideDelete}>NO</Button>
                </Modal.Footer>
            </Modal>
            {/* delete modal ends */}


            {/* book ui begins */}
            <Card  style={getStyle("card")}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title>
                        {props.title}
                    </Card.Title>
                    <Row>
                        <Col>
                            <Card.Img className="center"
                                style={{
                                    display:'inline',
                                    maxWidth: '140px',
                                    maxHeight: '204px',
                                    width: 'auto',
                                    height: 'auto'
                                }}  
                                src="https://codex.cs.yale.edu/avi/os-book/images/os9c-cover.jpg" 
                            />
                        </Col>
                        <Col xs={8}>
                            <ListGroup variant="flush">
                                <ListGroup.Item><b>Author(s):</b> Dummy Author</ListGroup.Item>
                                <ListGroup.Item><b>Publication Date:</b> 12/45/45</ListGroup.Item>
                                <ListGroup.Item><b>Size(MB):</b> 12</ListGroup.Item>
                                <ListGroup.Item><b>File Type:</b> PDF</ListGroup.Item>
                            </ListGroup>
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
                        <Button 
                            variant="outline-success" 
                            style={{margin: '10px'}}>
                            <i className="bi bi-download"></i> DOWNLOAD
                        </Button>
                        <Button
                            onClick={editClickHandler} 
                            variant="outline-info" 
                            style={{margin: '10px'}}>
                            <i className="bi bi-pen"></i> EDIT
                        </Button>
                        <Button 
                            onClick={deleteClickHandler} 
                            variant="outline-danger" 
                            style={{margin: '10px'}}>
                            <i className="bi bi-trash"></i> DELETE
                        </Button>
                        <Button 
                            variant="outline-primary" 
                            style={{margin: '10px', float:'right'}}>{props.linkTxt}
                        </Button>
                    </Card.Body>
                </Card.Body>
            </Card>
            {/* book ui ends */}
        </React.Fragment>
    );
};
export default Book;