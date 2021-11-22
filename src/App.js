import React, {useState} from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        {name: uName, 
        age: uAge,
        id: Math.random().toString()
      }
      ]
    })
  }

  const onDelete = (goalId) => {
    setUserList((prevUsers) => {
      const updateUsers = prevUsers.filter
      (user => user.id !== goalId)
      return updateUsers;
    });
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={userList} onDelete={onDelete}/>
    </div>
  )
}
export default App;