import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [isPet, setIsPet] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          did you pet franklin today?
        </h1>
        <p>{String(isPet)}</p>
        <button onClick={() => setIsPet(!isPet)}>
          pet
        </button>
      </header>
      <div>

      </div>
    {/* <div>
      <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
         Click me
      </button>
  </div>*/}

    </div>
  );
}

export default App;
