import './App.css';
import Todos from './Components/Todos';
// Food order app полностью доделайте добавить ответ на то как пользователь делает заказ то есть
// после кнопки order вы должны говорить юзеру успешно все сохранилось либо же ошибка сервер не может обработать запрос 
// Так же мне нужно закомментировать код useReducer как работает remove и add 

function App() {
  return (
    <div className="App">
      <Todos/>
    </div>
  );
}

export default App;
