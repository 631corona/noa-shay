import React from 'react';
import './App.css';
import NavBar from './components/nav bar/nav-bar.jsx';
import Home from './components/welcome/home.jsx';
import Labs from './components/labs/labs.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <NavBar></NavBar>
          <Home></Home>
          <Labs></Labs>
        </div>
      </header>
    </div>
  );
}

export default App;
