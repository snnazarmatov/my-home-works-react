import React, {useState, useEffect} from 'react';
import './App.css';


function App() {
  //input необходимо сделать управляемым
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //в это состояние мы будем добавлять как раз значения каторое будет находиться в инпуте
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Емайл не может быть пустым');
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')
  ;
  const [formValid, setFormValid] = useState(false);

  useEffect( () => {
    if (emailError || passwordError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  })


  //изменяем состояние на то что начодится в значение текущего таргета
  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(String(e.target.value).toLowerCase())){
      setEmailError('email error')
    }else {
      setEmailError('')
    }
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
    if (e.target.value.length < 3 || e.target.length > 8) {
      setPasswordError("Пароль должен быть длиннее 3 и меньше 8");
      //но в случае если импут пустой то обрабатываться та же логика Мы будем получать некорректон сообшение
      if(!e.target.value) {
        setPasswordError("Пароль не может быть пустым");

      }
      //обратном же случае это состояние обнуляем 
    }else {
      setPasswordError('')
    }
  }

  //когда пользователь покинул поле ввода
  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
        break
        case 'password':
          setPasswordDirty(true)
          break;
    }
  }

  return (
    <div className="App">
      <form>
        <h1>Registration</h1>
        {/* если какя-то ошибка возникла нам необходимо как-то уведомить об этом пользователя*/}
        {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
        <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name='email'
        type='text'
        placeholder='Enter your email...'/>
         {(passwordError && passwordDirty) && <div style={{color: 'red'}}>{passwordError}</div>}
        <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name='password'
        type='password'
        placeholder='Enter your password...'/>
        <button disabled={!formValid} type='submit'>Registration</button>
        
      </form>
    </div>
  );
}

export default App;
