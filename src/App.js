import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'toilet paper',
      amount: 94.12,
      date: new Date(2022,5,7),
    },
    {
      id: 'e2',
      title: 'new tv',
      amount: 944.12,
      date: new Date(2021,5,3),
    },
    {
      id: 'e3',
      title: 'car insurance',
      amount: 244.12,
      date: new Date(2020,5,9),
    }
  ]
    
  return (
    <div>
     <Expenses expenses = {expenses}/>
    </div>
  );
}

export default App;
