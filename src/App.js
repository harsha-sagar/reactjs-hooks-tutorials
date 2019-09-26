import React from 'react';
import logo from './logo.svg';
import './App.css';

import { UserProvider } from './components/UserContext';
import { CompanyProvider } from './components/CompanyContext';

import ComponentC from './components/ComponentC';

function App() {
  return (
    <div className="App">
      <UserProvider value="Harsha">
	      <CompanyProvider value="abc">
	      	<ComponentC />
	      </CompanyProvider>
      </UserProvider>
    </div>
  );
}

export default App;
