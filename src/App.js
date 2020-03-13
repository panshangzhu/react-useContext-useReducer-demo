import React from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import ComponentC from './components/ComponentC';
import Context from './components/Context'


function App() {
  return (
      <div className="App">
      <h1>Reacr useReducer and useContext Demo By Pan</h1>
      <Context>
      <ComponentA />
      <ComponentC />
      </Context>
      </div>
     
  );
}

export default App;
