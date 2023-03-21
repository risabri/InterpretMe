import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginpage from './pages/Loginpage';
import LoginButton from './pages/Loginbutton';
import Profile from './pages/Profile';
import LogoutButton from './pages/Logoutbutton';
import Demographic from './pages/Demographic';
import Explanation from './pages/Explanation';
import Detailpage from './pages/Detailpage';
import { useAuth0 } from "@auth0/auth0-react";



function App() {
  const { isLoading, error } = useAuth0();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>
          <h1>
            Auth0 log in </h1>
            <LoginButton/>
            {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
            <Profile/>
            <LogoutButton/>
            </>
          )}
        
        </div>} />
        <Route path="/demographic" element={<Demographic />} />
        <Route path="/loginpage" element={<Loginpage />} />
        <Route path="/explanation" element={<Explanation />} />

        <Route path="/detailpage" element={<Detailpage/>} />

      </Routes>
    </Router>
  );
}



export default App;
