import React, { Component } from 'react';
import './Login.css';
import axios from 'axios';

class Login extends Component {
  state = {
    email:'',
    password:''
}

handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState(
        {
            [name]:value
        }
    )
}

logInSubmitHandler = (event) =>{
    event.preventDefault();
    const user = {
        email:this.state.email,
        password:this.state.password
    }
    axios.post('http://localhost:8080/userLogin', user) //api call  angular method http.post & http.get

    .then(response =>{
        const loggedInUserFromBackEnd = response.data;
        this.props.setLoggedInUser(loggedInUserFromBackEnd);
    })
    .catch(error =>{
        console.log("Email or password is invalid.");
        //add logic to display error message on the screen
    })
    this.setState({

    })
}

    render() {
      return (
        <form onSubmit={this.logInSubmitHandler} className="login-box">
          <input name="email" type="text" placeholder="email" value={this.state.email} onChange={this.handleChange}/>
          <input name="password" type="password" placeholder="password" value={this.state.password} onChange={this.handleChange}/>
          <button type="submit">LogIn</button>
        </form>

        
      );
    }
}

export default Login;

/*<div className="form">
            <ul className="tab-group">
              <li className="tab active"><a href="#login">Log In</a></li>
              <li className="tab"><a href="#signup">Sign Up</a></li>
            </ul>
            <div className="tab-content">
              <div id="login">   
                <h1>Welcome Back!</h1>
                <form action="/" method="post">
                  <div className="field-wrap">
                  <label>
                    Email Address<span className="req">*</span>
                  </label>
                  <input type="email" required="" autocomplete="off"/>
                </div>
                <div className="field-wrap">
                  <label>
                    Password<span className="req">*</span>
                  </label>
                  <input type="password" required="" autocomplete="off"/>
                </div>
                <p className="forgot"><a href="#">Forgot Password?</a></p>
                <button className="button button-block">Log In</button>
                </form>
              </div>
            </div>
      </div> */

/*               <div id="signup">   
                <h1>Sign Up for Free</h1>
                <form action="/" method="post">
                <div className="top-row">
                  <div className="field-wrap">
                    <label>
                      First Name<span className="req">*</span>
                    </label>
                    <input type="text" required="" autocomplete="off"/>
                  </div>
                  <div className="field-wrap">
                    <label>
                      Last Name<span className="req">*</span>
                    </label>
                    <input type="text" required="" autocomplete="off"/>
                  </div>
                </div>
                <div className="field-wrap">
                  <label>
                    Email Address<span className="req">*</span>
                  </label>
                  <input type="email" required="" autocomplete="off"/>
                </div>
                <div className="field-wrap">
                  <label>
                    Set A Password<span className="req">*</span>
                  </label>
                  <input type="password" required="" autocomplete="off"/>
                </div>
                <button type="submit" className="button button-block">Get Started</button>
                </form>
              </div> */