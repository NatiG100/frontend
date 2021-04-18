import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import Backdrop from './Backdrop';
import './Modal.css';
import {Modal} from 'react-bootstrap';
const ModalOverlay = props => {
    const content = (
        <Modal.Dialog>
            {props.children}
        </Modal.Dialog>
    );
    return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};
const Modal = props => {
    return <React.Fragment>
        {props.show && <Backdrop onClick={props.onCancel} />}
        <ModalOverlay {...props} />
    </React.Fragment>
};
export default Modal;