import './App.css';
import Photos from './Components/Photos';
// HW_44 - useEffect()
// томондогу url менен GET запрос тузунуздор
// https://jsonplaceholder.typicode.com/photos?_limit=10

// келген маалыматарды реактын мумкунчулуктору менен страницага чыгарып бериниздер
// томондогудой шаблон болуп чыгыш керек
// сөзсүз түрдө: map,side effect, state, css болуш керек.


function App() {
  return (
    <div className="App">
      <Photos/>
    </div>
  );
}

export default App;
