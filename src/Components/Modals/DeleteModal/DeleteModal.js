import React from 'react';
import ReactDOM from 'react-dom';
import Backdrop from '..//..//../UI/Backdrop/Backdrop';
import ModalOverlayDelete from '../DeleteModal/ModalOverlayDelete';

const DeleteModal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onCancel}/>,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlayDelete onDelete={props.onDelete} onCancel={props.onCancel}/>,
                document.getElementById('modal-root')
            )}
        </React.Fragment>
        
    )
};

export default DeleteModal;
