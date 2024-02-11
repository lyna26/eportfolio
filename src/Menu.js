import React from 'react';
import './menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Menu() {
  return (
  <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-custom" >
        <a className="navbar-brand" href="#">Accueil</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">À propos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Menu;