import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';

//бул компонент рендер кылат
const CourseGoalList = props => {
  return (

    <ul className="goal-list">
      {/* props тан келген items терди map кылат */}
      {props.items.map(goal => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          // onDelete метод пропстан onDeleteItem ди алат
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
