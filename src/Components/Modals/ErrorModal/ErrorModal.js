import React from 'react';
import ReactDOM from 'react-dom';
import Backdrop from '../../UI/Backdrop/Backdrop';
import ModalOverlay from './ModalOverLay';

const ErrorModal = props => {
    return (
    <React.Fragment>
        {ReactDOM.createPortal(
            <Backdrop onConfirm={props.onConfirm}/>,
            document.getElementById('backdrop-root')
        )} 
        {ReactDOM.createPortal(
                <ModalOverlay
                title={props.title} 
                message={props.message} 
                onConfirm={props.onConfirm}
                />,
                document.getElementById('modal-root')
            )}  
    </React.Fragment>
    )
}

export default ErrorModal;