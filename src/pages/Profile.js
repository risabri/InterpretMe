// Profile.js
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import logo1 from '../components/logo1.svg';
import '../style/Profile.css';

const Profile = ({ onInterpret }) => {
  const { user } = useAuth0();

  return (
    <div className="demographic-container">

                <img src={logo1}alt="logo1" className="logo" />
                

                <div className="container">
                 
                    <h2>  Welcome {user.name} !  </h2>
                    <h10> Please strart your interpretation by
                        clicking the button below </h10>
                        <h4>
                        <button onClick={onInterpret}>Let's Interpret</button>
                        </h4>
                </div>
                <div>

                </div>
    </div>

  );
};

export default Profile;
