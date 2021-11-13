import React from 'react';

import './CourseGoalItem.css';

const CourseGoalItem = props => {
  
//бул метод delete кылат , подем состояние мн беребиз propsтан келген id си мн 
  const deleteHandler = () => {
    //lifting up
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
