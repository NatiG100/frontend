import React from 'react';
import {Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import getStyle from '../components/utils/bootstrapStyle';
const User = props => {
    return (
        <div className="card-wrapper">
        <Card style={{...getStyle("card"),maxWidth:"250",minWidth:"200"}}>
            <Card.Img variant="top" src={props.userImg} />
            <Card.Body>
                <Card.Title><Card.Link href="#">{props.userName}</Card.Link></Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem><b>Uploads</b> {props.uploads}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Button 
                    style={{borderRadius: '35px', margin: '4px'}}>
                        <i className="bi bi-facebook"></i>
                </Button>
                <Button
                    variant="dark" 
                    style={{borderRadius: '35px',margin: '4px'}}>
                        <i className="bi bi-twitter"></i>
                </Button>
                <Button 
                    variant="success"
                    style={{borderRadius: '35px', margin: '4px'}}>
                        <i className="bi bi-telegram"></i>
                </Button>
            </Card.Body>
        </Card>
        </div>
    );
};
export default User;