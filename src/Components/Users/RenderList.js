import React,{useState} from "react";
import Button from "../UI/Button/Button";
import DeleteModal from "../Modals/DelelteModal/DeleteModal";


function RenderList (props){
    const [active, setActive] = useState(false)

    // function onDelete() {
    //     props.onDelete(props.id)
    // }
   return (
          <li>
           {props.children}
           <Button onClick={() => setActive(true)}>Delete</Button>
      {/* props.OnDelete 3 */}
           {active && <DeleteModal onDelete={() =>   props.onDelete(props.id)} onCancel={() => setActive(false)}/>}
      </li>
   )
}

export default RenderList;