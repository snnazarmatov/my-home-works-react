import React from 'react';

import classes from './Navigation.module.css';

const Navigation = (props) => { // пропстан келген значениялар туура болсо Navigation иштейт
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
{/* props тан isLoggedIn состояния келип жатат ал true/falce келсе logout деген button чыгат
user logedIn болур logout button иштесе App.js тин ичинде logoutHandler функциябыз иштейт.
*/}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;