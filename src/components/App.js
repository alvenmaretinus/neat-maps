import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from './Routes';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Route component={Routes} />
      </BrowserRouter>
    </div>
  );
}

export default App;
