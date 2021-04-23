import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "./Navigation.css";
const Navigation = (props) => {
  
  return (

    <nav className="navbar navbar-expand-sm bg-light container-fluid main">
      <ul className="navbar-nav list">
        <li className="nav-item">
          <Link className="nav-link link" to="/">صفحه اصلی</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link link" to="/about">درباره ما</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link link" to="/weather">آب وهوا</Link>
        </li>
       
      </ul>
    </nav>

  )
}
export default Navigation;
