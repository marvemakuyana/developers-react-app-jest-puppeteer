import React, { useState, useCallback } from 'react';
import './App.css';
import Form from './Form';
import DevsTable from './DevsTable';

const App = () => {

  const [devs, setDevs] = useState([]);

  const addDeveloper = useCallback((dev) => {
    setDevs(devs => [...devs, dev])
  }, [setDevs])

  return (
    <div className='App'>
      <DevsTable devs={devs} />
      <Form add={addDeveloper} />
    </div>
  );
}

export default App;
