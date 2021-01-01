import Test from './components/Test';
import {useState} from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const handleInput = (event) => {
    setName(event.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <input type="text" onKeyUp={handleInput}/>
        <Test name={name}></Test>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer" 
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
