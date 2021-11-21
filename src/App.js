import React, {useState} from 'react';
import './App.css';
import AddUser from './Components/Users/AddUser/AddUser';
import UserList from './Components/Users/UserList/UserList';

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        {name: uName, age: uAge,
          id: Math.random().toString()
        }
      ]
    })
  }
  const onDelete = (goalId) => {
    setUserList((prevUsers) => {
      const updatedUsers =prevUsers.filter(user => user.id !== goalId)
      return updatedUsers;
    })
  }
  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userList} onDelete={onDelete}/>
    </div>
  );
}

export default App;
