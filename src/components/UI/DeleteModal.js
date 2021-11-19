import React from "react"
import Card from "./Card";
import Button from "./Button";
import classes from './DeleteModal.module.css'



const DeleteModal = props => {
    return (
        <div className={classes.backdrop} onClick={props.onConfirm}>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <p className={classes.text}>удалить эткени макулсузбу анда confirm?<br/>же болбосом жок отмена cancel</p>
                        <footer className={classes.actions}>
                           <Button onClick={props.onDelete}>Confirm</Button>
                           <Button onClick={props.onCancel}>Cancel</Button>
                         </footer>
                </header>
            </Card>
        </div>
            
            
        
    )
}

export default DeleteModal;