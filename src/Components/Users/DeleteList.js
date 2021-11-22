import React, {useState}from 'react';
import Button from '../UI/Button/Button';
import DeleteModal from '../Modals/DeleteModal/DeleteModal';


const DeleteList = (props) => {
    const [activ, setActiv] = useState(false);

    const deleteHandler = () => {
        setActiv(true);
    }

    function onDelete() {
        props.onDelete(props.id)
    }

    return (
        <li>
            {props.children}
            <Button onClick={deleteHandler}>
                Delete
            </Button>
            {activ ? <DeleteModal onDelete={onDelete} onCancel={() => setActiv(false)}/> : ''}
        </li>
    )
}

export default DeleteList;
