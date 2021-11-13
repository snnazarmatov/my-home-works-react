// import styled from 'styled-components';


//styled-components ti(podhotun) koldongon uchurda.

// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

////adaptivnost @media mn kylabyz.

// @media (min-width: 700px){
//   width:auto;
// }
// &:focus {
//   outline: none;
// }

// $:hover,
// $:active {
//   background: #ac0e77;
//   border-color: #ac0e77;
//   box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
// }

// `;

////(module nyi padhod)css modules это CSS файл, в котором все имена классов и атимций имеют локальную область видимости по умолчанию.

////styles degen (Button.module.css ichindegi)стил своистволорду сактай турган обьект болуп калат.
import React from 'react';
import styles from './Button.module.css';

//button озунчо Компонент кылып алдык UI сыяктуу,и каалаган жерде колдонсок болот

const Button = props => {
  return (
    //type propsтан келет,onClick да propsтан келат,и props children алат
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
