import React from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import ComponentC from './components/ComponentC';
import Context from './components/Context'


function App() {
  return (
      <div className="App">
      <h1>Pan Number Counter  </h1>
      <Context>
      <ComponentA />
      <ComponentC />
      </Context>
      </div>
     
  );
}

export default App;
