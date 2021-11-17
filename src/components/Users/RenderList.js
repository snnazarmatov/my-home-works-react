import React,{useState} from "react";
import Button from "../UI/Button";
import DeleteModal from "../UI/DeleteModal";
import classes from '../UI/DeleteModal.module.css';


function RenderList(props){
    const [active, setActive] = useState(false)

    const deleteHandler = () => {
        setActive(true)
    }

    function onDelete() {
        props.onDelete(props.id)
    }
   return (
          <li className={classes.list}>
           {props.children}
           <Button onClick={deleteHandler}>Delete</Button>
           {active ? <DeleteModal onDelete={onDelete} onCancel={() =>  setActive(false)}/> : ''}
      </li>
   )
}

export default RenderList;