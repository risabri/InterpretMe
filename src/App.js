import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./pages/LoginButton";
import Profile from "./pages/Profile";
import Demographic from "./pages/Demographic";
import Checklist from "./pages/Checklist";
import AnotherPage from "./pages/AnotherPage";
import LogoutButton from "./pages/LogoutButton";

function App() {
  const [showDemographic, setShowDemographic] = useState(false);
  const [showChecklist, setShowChecklist] = useState(false);
  const [showAnotherPage, setShowAnotherPage] = useState(false);
  const { isAuthenticated } = useAuth0();

  const handleInterpret = () => {
    setShowDemographic(true);
  };

  const handleNextDemographic = () => {
    setShowDemographic(false);
    setShowChecklist(true);
  };

  const handleNextChecklist = () => {
    setShowChecklist(false);
    setShowAnotherPage(true);
  };

  return (
    <div>
      {!isAuthenticated && <LoginButton />}
      {isAuthenticated && !showDemographic && !showChecklist && !showAnotherPage && (
        <Profile onInterpret={handleInterpret} />
    
      )}

        <LogoutButton />
      {isAuthenticated && showDemographic && (
        <Demographic onNext={handleNextDemographic} />
      )}
      {isAuthenticated && showChecklist && (
        <Checklist onNext={handleNextChecklist} />
      )}
      {isAuthenticated && showAnotherPage && <AnotherPage />}
    </div>
  );
}

export default App;
