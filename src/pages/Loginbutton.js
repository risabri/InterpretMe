import { useAuth0 } from '@auth0/auth0-react';
import logo1 from '../components/logo1.svg';
import '../style/LoginButton.css';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (

    <div className="homepage-container">
     
        <img src={logo1} alt="logo1" className="logo" />
   
    <div className="container">

      <div className="welcome-message">
        Welcome to Interpret-me Home page! This website will help you [introduction]!
      <h1 className = "signinbuttoncontainer">
      <button className="sign-in-btn" onClick={() => loginWithRedirect()}>
        Sign In
      </button>
      </h1>
      </div>
    </div>
 </div>
  );
};

export default LoginButton;
