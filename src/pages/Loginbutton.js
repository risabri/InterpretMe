import { useAuth0 } from '@auth0/auth0-react';
import logo1 from '../components/logo1.svg';
import '../style/LoginButton.css';
import longlogo from '../components/longlogo.png';


const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (

    <div className="homepage-container">
     
        <img src={logo1} alt="logo1" className="logo" />
   
    <div className="container">
    <div className="content-container">

      <div className="welcome-message">
      Welcome to <img src={longlogo} alt="longlogo" className="long-logo" />  
      </div>
      <h1 className = "signinbuttoncontainer">

                <h1 className="signinbuttoncontainer">
            { !isAuthenticated && (
                <button className="sign-in-btn" onClick={() => loginWithRedirect()}>
                Click here to start 
                </button>
            )}
            </h1>
         </h1>




      </div>
      </div>
 </div>
  );
};

export default LoginButton;
