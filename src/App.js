import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [isPet, setIsPet] = useState(false);
  // const []
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

// https://stackoverflow.com/questions/49945974/detect-re-visitors-using-localstorage
function logVisit () {
  // check if the localStorage object is supported by the browser
  if ('localStorage' in window && window['localStorage'] !== null) {
    var visits = localStorage.getItem('visits');
    // if (visits == null)
  }
  return 
}

export default App;

// refs
// https://stackoverflow.com/questions/61054275/usestate-with-boolean-value-in-react
// https://dommagnifi.co/2020-12-03-toggle-state-with-react-hooks/
// https://dev.to/alexkhismatulin/update-boolean-state-right-with-react-hooks-3k2i
// https://felixgerschau.com/react-localstorage/
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
// https://stackoverflow.com/questions/49945974/detect-re-visitors-using-localstorage
// https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem