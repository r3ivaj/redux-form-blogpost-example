import React from 'react';
import './App.css';
import createConnectedForm from './createConnectedForm';
import { range } from 'ramda';
import numberOfForms from './numberOfForms';

function App() {
  return (
    <div className="App">
      {range(0, numberOfForms).map(number => {
        const Form = createConnectedForm(number);
        return (
          <Form key={number} />
        );
      })}
    </div>
  );
}

export default App;
