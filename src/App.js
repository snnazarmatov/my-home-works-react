import React,{useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

// практикада жазылган кодду карап жазып чыккыла 
// Жана ошондой эле жаны функционал:
//  ар бир кошулган адамдын жанында delete кнопка ал кнопканы басканда 
// модальное окно пайда болсун 
// модальное окнодо эки кнопка болуш керек 
// удалить эткени макулсузбу confirm 
// же болбосом жок отмена cancel 
// confitm бассылса чындап эле кошулган адам удаление болуш керек 
// а cancel бассылган болсо модальное окно жоголуп кетет  

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

