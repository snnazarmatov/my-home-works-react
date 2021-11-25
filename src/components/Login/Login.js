import React, { useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState(''); // поле ввода емейл
  const [emailIsValid, setEmailIsValid] = useState(''); // проверка поля true/false емейл
  const [enteredPassword, setEnteredPassword] = useState(''); // поле ввода пароль
  const [passwordIsValid, setPasswordIsValid] = useState(); // проверка поля true/false пароль
  const [formIsValid, setFormIsValid] = useState(false); // проверка полей true/false емейл & пароль


            //email
  const emailChangeHandler = (event) => {
    // инпутка жазылган value алат email
    setEnteredEmail(event.target.value);

    setFormIsValid(
      // проверка валидацию email инпутка жазылган value ну кайра алаып includes('@'ушунун ичинде эмне болсо true bolot) и password
      event.target.value.includes('@') && enteredPassword.trim().length > 6
    );
  };
            //password
  const passwordChangeHandler = (event) => {
    // password инпутка жазылаган value алат password
    setEnteredPassword(event.target.value);

    setFormIsValid(
      // проверка валидацию password и email
      event.target.value.trim().length > 6 && enteredEmail.includes('@')
    );
  };
//*********************************** */


        //validate?
  const validateEmailHandler = () => {
    // @ бар болуш керек экенин текшерет, болбосо иштебейт
    setEmailIsValid(enteredEmail.includes('@'));
  };

        //validPassword
  const validatePasswordHandler = () => {
    // password 6дан чон болуш кк
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };
//enteredEmail,enteredPassword tu emailIsValid,posswordIsValid ке(проверка поля true/false емейл и парол) го сактап коюушубуя керек анкени
//ушул жерде колдонобуз  <div
        //   className={`${classes.control} ${
        //     passwordIsValid === false ? classes.invalid : ''
        //   }`}
        // >


//************************************ */
  const submitHandler = (event) => {
    // buttton басканда функция иштейт
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword); // lifting-up
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className=
          //disabled деген пропста обшии form ду проверка кылабыз inValid басыбайт isValid басылат
          {classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;