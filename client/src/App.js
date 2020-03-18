import React from 'react';
import './App.css';
import NavBar from './components/nav bar/nav-bar.jsx';
import Home from './components/welcome/home.jsx';
import Labs from './components/labs/labs.jsx';
import ImageGallry from './components/image-gallery/image-gallery.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <NavBar/>
          <Home/>
          <Labs/>
          <ImageGallry/>
        </div>
      </header>
    </div>
  );
}

export default App;
