import React from 'react';
import '../style/Loginpage.css';
import logo1 from '../components/logo1.svg';

const Loginpage = () => {
  return (
    <div className="container"> 
    <div className="logoContainer"> 
      <img src={logo1} alt="logo1" className="logo" />
    </div>
      <div className="loginFormBack"> 
      <h1 className="title">
      Log in
    </h1>
        <div id="loginForm">
          <form>
            <div className="userInfo">
              <label htmlFor="firstName" className="fillOut"> First Name: </label><br />
              <input type="text" id="fname" name="fname" required className="fillOut" />
            </div>

            <div className="userInfo">
              <label htmlFor="LastName" className="fillOut"> Last Name: </label><br />
              <input type="text" id="lname" name="lname" required className="fillOut" />
            </div>

            <div className="userInfo">
              <label htmlFor="email" className="fillOut"> Email: </label><br />
              <input type="email" id="email" name="email" required className="fillOut" />
            </div>

            <div className="userInfo">
              <button type="submit" className="fillOut">Log in</button>
            </div>
          </form>    
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
