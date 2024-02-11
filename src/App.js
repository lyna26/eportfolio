import React from 'react'
import './App.css';
import Presentation from './AboutMe'
import Menu from './Menu'

function App() {
  return (
    <div>
        <div className="App">
          <header>
            <Menu />
          </header>
          <h1> Lyna DJELMOUDI </h1>
          <div className="container text-center mt-4">
            <img
              className="rounded-circle d-inline-block p-3"
              src="/images/lyna.jpeg" // Use an absolute path to the image
              alt="Lyna DJELMOUDI"
              height="395"
              width="395"
            />
          </div>
        </div>
      </div>
  );
}
export default App;
