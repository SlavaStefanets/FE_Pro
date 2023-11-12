import User from "./components/User";


function App() {
  let number = 4;
  let string = 'hauptstr';
  let bol = true;
  let obj = {
    userName: 'Slava',
    age: 37
  }

  return (
    <div className="App">
      <User hous={number} adress={string} boolien={bol} object={obj}></User>
    </div>
  );
}

export default App;
