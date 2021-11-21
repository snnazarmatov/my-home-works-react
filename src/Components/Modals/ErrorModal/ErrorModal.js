import React from 'react';
import ReactDOM from 'react-dom';
import Backdrop from '..//..//../UI/Backdrop/Backdrop';
import ModalOverlay from '../DeleteModal/ModalOverlay'

const ErrorModal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm}/>,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay title={props.title}
                message={props.messege}
                onConfirm={props.onConfirm}/>,
                document.getElementById('modal-root')
            )}
        </React.Fragment>
    )
}

export default ErrorModal;
