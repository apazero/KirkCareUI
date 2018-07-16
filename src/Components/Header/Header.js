import React, { Component } from 'react';
import logo from '../../Images/homelogo.png';

class Header extends Component {
    render() {
      return (
        <div className="header">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img className="navbar-brand" src={logo} />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
            <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Get Involved</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Newsletters</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Donate</a>
            </li>
            </ul>

            <form className="form-inline my-2 my-lg-0">
                
                <button className="btn btn-outline-success my-2 my-sm-0" id="nav-login" type="submit">LogIn</button>
            </form>
            </div>
         </nav>
        </div>
      );
    }
  }
  
  export default Header;

 // <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
 // <button className="btn btn-outline-success my-2 my-sm-0" id="login" type="submit">LogIn</button>