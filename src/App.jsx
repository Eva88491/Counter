import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');


  React.useEffect(() => {
    console.log('Count changed:', count, '| type:', typeof count);
  }, [count]);

  React.useEffect(() => {
    console.log('First Name changed:', firstName, '| type:', typeof firstName);
  }, [firstName]);

  React.useEffect(() => {
    console.log('Last Name changed:', lastName, '| type:', typeof lastName);
  }, [lastName]);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  const incrementFive = () => setCount(count + 5);

  return (
    <div className="container">
      <h1 className="count-heading">Count: {count}</h1>

      <div className="button-group">
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={incrementFive}>Increment 5</button>
      </div>

      <h1 className="welcome">Welcome to CHARUSAT!!!!</h1>

      <div className="form-group">
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
      </div>

      <div className="output-group">
        <h3>First Name: {firstName}</h3>
        <h3>Last Name: {lastName}</h3>
      </div>
    </div>
  );
}

export default App;
