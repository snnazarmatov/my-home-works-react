import React,{useState} from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

// // Чтобы выполнить это задание вам необходимо выполнить задание HW_41:
// Бул тапшырманы аткаруу үчүн HW_41 тапшырмасын аткарышыңыз керек:
// Вам нужно открыть порталы для вашего модального окна сделанного в домашке HW_41 
// Нужно так же по логике разделить ваше модальное окно на компоненты
// А потом создать для них div'ы в index.html и передать туда компоненты с помощью  порталов
// HW_41 башкы бетинде жасалган модалдык терезеңиз үчүн порталдарды ачышыңыз керек
// Модалдык терезеңизди компоненттерге логикалык жактан бөлүшүңүз керек
// Анан алар үчүн index.html ичинде div түзүңүз жана порталдар аркылуу компоненттерди ал жерге өткөрүңүзv


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