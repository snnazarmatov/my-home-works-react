import React,{useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() { 
  const [userList, setUserList] = useState([])

  const addUserHandler = (uName, uAge) => {
      setUserList((prevUserList) => {
        return [
          ...prevUserList,
          {name: uName,
            age: uAge,
            id: Math.random().toString()}
        ]
      })
  }

   const onDelete = (goalId) => {
    setUserList( (prevUsers) => {
      const updatedUsers = prevUsers.filter((user) => user.id !== goalId)
      return updatedUsers
    });
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={userList} onDelete={onDelete}/>
    </div>
  );
}

export default App;

