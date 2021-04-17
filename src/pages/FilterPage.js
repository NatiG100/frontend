import React,{useState, useRef} from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import '../components/utils/bootstrapStyle'
import getStyle from '../components/utils/bootstrapStyle';

const FilterPage = () => {
    const [isTypeClicked, setIsTypeClicked] = useState(false);
    const [isSizeClicked, setIsSizeClicked] = useState(false);
    const typeClickHandler = (event) =>{
        setIsTypeClicked(!isTypeClicked);
    };

    const sizeClickHandler = (event) =>{
        setIsSizeClicked(!isSizeClicked);
    };
    return (
        <div class="container">
            <Card style ={{... getStyle('card'), maxWidth: '600px'}}>
                <Card.Body>
                    <Form>
                        <div key="inline-checkbox" className='mb-3'>
                            <h3>Filter By</h3>
                            <Form.Check 
                                inline 
                                label="File Type" 
                                type="checkbox" 
                                id="fileTypeChkBx"
                                onClick={typeClickHandler} 
                            />
                            <Form.Check 
                                inline 
                                label="File Size(MB)" 
                                type="checkbox" 
                                id="fileSizeChkBx"
                                onClick={sizeClickHandler}
                            />
                        </div>
                    </Form>
                </Card.Body>
            </Card>
            <Card style ={{... getStyle('card'), maxWidth: '600px'}}>
                <Card.Body>
                    <Form>
                        <Form.Group controlId="title">
                            <Form.Label>Book Title</Form.Label>
                            <Form.Control type="text" placeholder="Book Title"/>
                        </Form.Group>
                        <Form.Group controlId="fileType">
                            <Form.Label>File Type</Form.Label>
                            <Form.Control as="select" disabled={!isTypeClicked}>
                                <option>PDF</option>
                                <option>DOCX</option>
                                <option>DJUV</option>
                                <option>EPUB</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="fileSize">
                            <Form.Label>File Size</Form.Label>
                            <Form.Control type="number" placeholder="File Size" disabled={!isSizeClicked}/>
                        </Form.Group>
                        <Button variant="success" type="submit">
                            <i class="bi bi-search"> </i>Search
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};
export default FilterPage;