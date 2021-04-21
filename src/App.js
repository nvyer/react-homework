import React from 'react';
import Counter from './components/counter/Counter';
import { LoginForm } from './components/login-form/Login-Form';
import { Wrapper } from './components/Unmounting-count-tracker/Wrapper';
import { Countries } from './components/countries-search/Countries';

import './App.css';

function App() {
  return (
    <div>
      <Counter />
      {/* <LoginForm /> */}
      {/* <Wrapper /> */}
      {/* <Countries /> */}
    </div>
  );
}

export default App;
