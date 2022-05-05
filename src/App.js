import './App.css';
import React from 'react';

// Сакабактагы аткарган кодду кайрадан жазып чыккыла бирок жонокой редакс менен 
// Redux toolkit бар болсо тапышрма текшерилбейт

function App() {
  const [state,setState] = React.useState('')
  
  return (
    <form>
    <input type='text' {style='backgroundColor:red'} id='input1' onChange={(e) => setState(e.target.value)} value={state}/>
      <input type='text' style='backgroundColor:blue;' id='input2' onChange={(e) => setState(e.target.value)} value={state}/>
      <input type='text' onChange={(e) => setState(e.target.value)} value={state}/>
      <button></button>
    </form>
  );


}

export default App;
