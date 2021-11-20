import React,{useState} from "react";
import Button from "../UI/Button";
import DeleteModal from "../UI/DeleteModal";


function RenderList(props){
    const [active, setActive] = useState(false)

    const deleteHandler = () => {
        setActive(true)
    }

    function onDelete() {
        props.onDelete(props.id)
    }
   return (
          <li>
           {props.children}
           <Button onClick={deleteHandler}>Delete</Button>
           {active ? <DeleteModal onDelete={onDelete} onCancel={() =>  setActive(false)}/> : ''}
      </li>
   )
}

export default RenderList;