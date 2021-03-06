import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Navbard() {
    return (
        <div>
         
         <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
            <Link className="navbar-brand" to="/" >HOME</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/register" >Register</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login" >Login</Link>
                </li>
                </ul>
            </div>
            </div>
         </nav>
      </div>
    )
}

export default Navbard;
