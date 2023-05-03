import './App.css';
import React from 'react';

function App() {
  let firstValue: string = "Manny";
  return (
    <div className="App">
      <header className="App-header">
        <p>
The value {} is of {typeof firstValue} typeof
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
