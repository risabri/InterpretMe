// this is the user.js, bascially will control everything here 


import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./Login";
import Profile from "./Profile";
import Demographic from "./Demographic";
import Checklist from "./Checklist";
import AnotherPage from "./AnotherPage";

function App() {
    const [showDemographic, setShowDemographic] = useState(false);
    const { isAuthenticated } = useAuth0();
    const [showAnotherPage, setShowAnotherPage] = useState(false);

    const handleInterpret = () => {
        setShowDemographic(true);
      };

  const handleNext = () => {
    setShowAnotherPage(true);
  };

  return (
    <div>
    {!isAuthenticated && <Login />}
      {isAuthenticated && !showDemographic && <Profile onInterpret={handleInterpret} />}
      {isAuthenticated && showDemographic && <Demographic />}
      {!showAnotherPage && <Checklist onNext={handleNext} />}
      {showAnotherPage && <AnotherPage />}
    </div>
  );
}

export default App;