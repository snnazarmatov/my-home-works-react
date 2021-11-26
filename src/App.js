import React, { useState,useEffect } from 'react';

import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import MainHeader from './Components/MainHeader/MainHeader';

// Акыркы сабактагы биз иштептип жаткан проекти кочуруп жазып
// ар бир жазылган код кантип иштеп жатканын коммент менен мага тушундуруп бериниздер 
// Сураныч)


function App() {
  //useState 2 argument кайтарат
  //1-баштапкы озгорма,2-метод ошол озгормону алмаштырат.useEffect эч нерсе кайтарбайт.

  //useEffect тин синтаксиси,иштеши.
  // useEffect(() => {
  //   console.log("in effect");
  // })бир callBack аргумент мн.
  //состояние озгоргон сайын Effect иштей берет.
  //2
  // useEffect(() => {
  //   console.log("in effect");
  // },[]);//зависимост кошкон учурда useEffect бир жолу иштейт.
  //********************************* */
 

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
//________________________________
  useEffect(() => {
    const storedUserLogged = localStorage.getItem('isLoggedIn');//1
    if(storedUserLogged === '1') {
      setIsLoggedIn(true);
    }
  },[])
  //react тиешеси жок,подкапотам иштей турган логика.кайра башынан рендер болуп кеткен учурда useEffect колдонобуз
  //_________________________________
   

  

  const loginHandler = (email, password) => { // логин тууралыгын коргозуп берет
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1')
    setIsLoggedIn(true);
  };
// password тууралыгын коргозуп берет
  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn')
    //user logout кылганда очуп кетет
    setIsLoggedIn(false);
  };


  return (

    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {/* Login туура болсо кийинки бетке откозот */}
        {!isLoggedIn && <Login onLogin={loginHandler} />} 
        {/* Home дон Loginге чыгат */}
        {isLoggedIn && <Home onLogout={logoutHandler} />} 
      </main>
    </React.Fragment>
  );
}

export default App;