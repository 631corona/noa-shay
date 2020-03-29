import React from 'react';
import './App.css';
import NavBar from './components/nav bar/nav-bar.jsx';
import Home from './components/welcome/home.jsx';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <NavBar/>
          <Home/>
        </div>
      </header>
    </div>
  );
}

export default App;
