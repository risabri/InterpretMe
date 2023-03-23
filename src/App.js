import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./pages/LoginButton";
import Profile from "./pages/Profile";
import Demographic from "./pages/Demographic";
import Checklist from "./pages/Checklist";
import AnotherPage from "./pages/AnotherPage";
import LogoutButton from "./pages/LogoutButton";
import Explanation from "./pages/Explanation";
import Authorpost from "./pages/Authorpost";



function App() {
  const { isAuthenticated } = useAuth0();
  const [currentPage, setCurrentPage] = useState("profile");

  const handleInterpret = () => {
    setCurrentPage("demographic");
  };

  const handleExplanation = () => {
    setCurrentPage("explanation");
  };

  const handleAuthorpost = () => {
    setCurrentPage("authorPost");
  };



  return (
    <div>
      {!isAuthenticated && <LoginButton />}
      {isAuthenticated && currentPage === "profile" && <Profile onInterpret={handleInterpret} />}
      <LogoutButton />
      {isAuthenticated && currentPage === "demographic" && <Demographic onExplanation={handleExplanation} />}
      {isAuthenticated && currentPage === "explanation" && <Explanation onAuthorpost={handleAuthorpost} />}
      {isAuthenticated && currentPage === "authorPost" && ( <Authorpost />
      )}
      
    </div>
  );
}

export default App;
/*

function App() {
  const { isAuthenticated } = useAuth0();
  const [currentPage, setCurrentPage] = useState("profile");

  const handleInterpret = () => {
    setCurrentPage("demographic");
  };

  const handleExplanation = () => {
    setCurrentPage("explanation");
  };

  return (
    <div>
      {!isAuthenticated && <LoginButton />}
      {isAuthenticated && currentPage === "profile" && <Profile onInterpret={handleInterpret} />}
      <LogoutButton />
      {isAuthenticated && currentPage === "demographic" && <Demographic onExplanation={handleExplanation} />}
      {isAuthenticated && currentPage === "explanation" && <Explanation />}
    </div>
  );
}

export default App;



function App() {
  const { isAuthenticated, isLoading, error } = useAuth0();
  const [showDemographic, setShowDemographic] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showChecklist, setShowChecklist] = useState(false);
  const [showAnotherPage, setShowAnotherPage] = useState(false);

  const handleInterpret = () => {
    setShowDemographic(true);
    setShowExplanation(false);
  };

  const handleExplanation = () => {
    setShowDemographic(false);
    setShowExplanation(true);
  };

  return (
    <div>
      {!isAuthenticated && <LoginButton />}
      {isAuthenticated && !showDemographic && !showChecklist && !showAnotherPage && (
        <Profile onInterpret={handleInterpret} />
      )}

      <LogoutButton />

      {isAuthenticated && showDemographic && (
      <Demographic onExplanation={handleExplanation} />
         )}
      {isAuthenticated && showExplanation && <Explanation />}
  
    </div>
  );
}
export default App;















function App() {
  const { isAuthenticated, isLoading, error } = useAuth0();
  const [showDemographic, setShowDemographic] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false)

  const [showChecklist, setShowChecklist] = useState(false);
  const [showAnotherPage, setShowAnotherPage] = useState(false);

  const handleInterpret = () => {
    setShowDemographic(true);
  };

  const handleNext = () => {
    setShowExplanation(true);
    };




  const handleNextDemographic = () => {
    setShowDemographic(false);
    setShowChecklist(true);
  };
// for the checklist to another page
  // const handleNextChecklist = () => {
  //  setShowAnotherPage(true);
 // };

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

       
      {isAuthenticated && showDemographic && !showExplanation && (
        <Demographic onNext={handleNext} />
        )}
      {isAuthenticated && showExplanation && <Explanation />}




      {isAuthenticated && showChecklist && (
        <Checklist onNext={handleNext} />
      )}
      {isAuthenticated && showAnotherPage && <AnotherPage />}
    </div>
  );
}

export default App;




// last version 
import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./pages/LoginButton";
import Profile from "./pages/Profile";
import Demographic from "./pages/Demographic";
import LogoutButton from "./pages/LogoutButton";
import Explanation from "./pages/Explanation";

function App() {
  const { isAuthenticated } = useAuth0();
  const [currentPage, setCurrentPage] = useState("profile");

  const handleInterpret = () => {
    setCurrentPage("demographic");
  };

  const handleExplanation = () => {
    setCurrentPage("explanation");
  };

  return (
    <div>
      {!isAuthenticated && <LoginButton />}
      {isAuthenticated && currentPage === "profile" && <Profile onInterpret={handleInterpret} />}
      <LogoutButton />
      {isAuthenticated && currentPage === "demographic" && <Demographic onExplanation={handleExplanation} />}
      {isAuthenticated && currentPage === "explanation" && <Explanation />}
    </div>
  );
}

export default App;

*/

