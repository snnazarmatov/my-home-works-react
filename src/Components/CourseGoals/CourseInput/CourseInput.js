import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

//css ti kandai koldonuudagy 1-padhodu.



// const FormControl = styled.div`
//   margin: 0.5rem 0;


// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   // js sintaxsis
//   color: ${props => (props.invalid ? 'red' : 'black' )};
// }
// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid ${props => (props.invalid ? 'red' : '#ccc' )};
//   background:${props => (props.invalid ? 'rgb(197, 155, 155)' : 'trancparent' )};
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

//  & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }


// `;

//бул компонент CoursGoal, инпутту и button ду иштетип жатат. 
const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0 ) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    
    if(enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
      //return atkarylsa bul   props.onAddGoal(enteredValue);ishtebeit.

    }
    props.onAddGoal(enteredValue);
    setEnteredValue('')
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* invalid props dep props berebiz */}
      {/* <FormControl invalid={!isValid}> */}
      <div className={`${styles['form-control'] } ${!isValid && styles.invalid}`}>
        {/*['form-control']}>className дин аты тире меnen жазылса фигурный скопкага алабыз  */}
        <label>Course Goal</label>
        <input 
        type="text"  onChange={goalInputChangeHandler} value={enteredValue}/>
      </div>
    {/* button componentabyz jsx эмес баскыч сапатында каалаган жерде чакыра берсек болот  */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
