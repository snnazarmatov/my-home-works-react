import classes from '../DeleteModal/DeleteModal.module.css';
import Card from '..//../UI/Card';
import Button from '..//../UI/Button/Button';

const ModalOverlayDelete = (props) => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>Delete</h2>
            </header>
            <div className={classes.content}>
                <p>Delete this user</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onDelete}>Delete</Button>
                <Button onClick={props.onCancel}>Cancel</Button>
            </footer>
        </Card>
    )
}

export default ModalOverlayDelete;
