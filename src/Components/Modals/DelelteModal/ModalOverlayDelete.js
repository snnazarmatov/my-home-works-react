
import classes from './ModalOverlay.module.css'
import Card from '../../UI/Card/Card'
import Button from '../../UI/Button/Button'

function ModalOverlayDelete(props) {
    return(
    <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>Delete</h2>
        </header>
        <div className={classes.content}>
            <p>Delete this user?</p>
        </div>
        <footer className={classes.actions}>
            {/* props.onDelete 5 */}
            <Button onClick={props.onDelete}>Delete</Button>
            <Button onClick={props.onCancel}>Cancel</Button>
        </footer>
    </Card>
    )
}

export default ModalOverlayDelete;