import React,{useState, useRef} from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import '../components/utils/bootstrapStyle'
import getStyle from '../components/utils/bootstrapStyle';

const FilterPage = () => {
    // states for form validation
    const [size, setSize] = useState({value:1, isValid:false});
    const [title, setTitle] = useState({value:"", isValid:false});
    const [type, setType]= useState("PDF");

    const [titleIsBlur, setTitleIsBlur] = useState(false);
    const [sizeIsBlur, setSizeIsBlur] = useState(false);

    //states for filter checkbox
    const [isTypeClicked, setIsTypeClicked] = useState(false);
    const [isSizeClicked, setIsSizeClicked] = useState(false);
    
    //functions for validation
    const handleTitleCange = (event) =>{
        if(event.target.value.size >= 1){
            setTitle({value: event.target.value, isValid:true});
            return;
        }
        setTitle({value: event.target.value, isValid:false});
    };
    const handleSizeCange = (event) =>{
        if(typeof event.target.value !== "number"){
            setSize({value: event.target.value, isValid:true});
            return;
        }
        setSize({value: event.target.value, isValid:false});
    };
    const handleTypeCange = (event) =>{
        setType(event.target.value);
    };
    
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