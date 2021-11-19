import React from "react"
import ReactDOM  from "react-dom";
import Backdrop from "../../UI/Backdrop/Backdrop";
import ModalOverlayDelete from "./ModalOverlayDelete";

const DeleteModal = props => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onCancel={props.onCancel} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                // props.OnDelete 4
                <ModalOverlayDelete onDelete={props.onDelete} onCancel={props.onCancel}/>,
                document.getElementById('modal-root')
            )}
        </React.Fragment>
    )
};

export default DeleteModal;
