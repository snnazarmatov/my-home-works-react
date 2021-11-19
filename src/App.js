import React,{useState} from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';


function App() { 
  const [userList, setUserList] = useState([])

  // добавить user'a
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

  // удалить user
   const onDelete = (goalId) => {
    setUserList( (prevUsers) => {
      const updatedUsers = prevUsers.filter(user => user.id !== goalId)
      return updatedUsers
    });
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      {/* props.OnDelete 1 */}
      <UsersList users={userList} onDelete={onDelete}/> 
    </div>
  );
}

export default App;