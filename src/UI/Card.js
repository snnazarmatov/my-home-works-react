import React from 'react'
import './Card.css'

const Card = (props) => {
  let classes = 'card' + props.className;
    console.log(props);
  return (
  <div className={classes}>
    {props.children}
    </div>
   
  )
}

export default Card