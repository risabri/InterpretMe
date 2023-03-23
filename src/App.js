import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./pages/LoginButton";
import Profile from "./pages/Profile";
import Demographic from "./pages/Demographic";
import Explanation from "./pages/Explanation";
import Authorpost from "./pages/Authorpost";
import Authorposttwo from "./pages/Authorposttwo";
import Detailpage from "./pages/Detailpage";
import Authorpostthree from "./pages/Authorpostthree";
import Checklist from "./pages/Checklist";
import AnotherPage from "./pages/AnotherPage";
import LogoutButton from "./pages/LogoutButton";



function App() {
  const { isAuthenticated } = useAuth0();
  const [currentPage, setCurrentPage] = useState("profile");

  const handleInterpret = () => {
    setCurrentPage("demographic");
  };

  const handleExplanation = () => {
    setCurrentPage("explanation");
  };


  const handleDetailpage = () => {
    setCurrentPage("detailPage");
  };

  const handleAuthorpost = () => {
    setCurrentPage("authorPost");
  };

  const handleAuthorposttwo = () => {
    setCurrentPage("authorPosttwo");
  };

  const handleAuthorpostthree = () => {
    setCurrentPage("authorPostthree");
  };


   const handleNextChecklist = () => {
    setCurrentPage("checklist");
  };

  const handleAnotherPage = () => {
    setCurrentPage("anotherPage");
  };



  return (
    <div>
      {!isAuthenticated && <LoginButton />}
      {isAuthenticated && currentPage === "profile" && <Profile onInterpret={handleInterpret} />}
      <LogoutButton />
      {isAuthenticated && currentPage === "demographic" && <Demographic onExplanation={handleExplanation} />}
      {isAuthenticated && currentPage === "explanation" && <Explanation onDetailpage={handleDetailpage} />}
      {isAuthenticated && currentPage === "detailPage" && <Detailpage onAuthorpost={handleAuthorpost} />}
      {isAuthenticated && currentPage === "authorPost" &&  <Authorpost onAuthorPosttwo={handleAuthorposttwo} />}
      {isAuthenticated && currentPage === "authorPosttwo" &&  <Authorposttwo onAuthorPostthree ={handleAuthorpostthree} />} 
      {isAuthenticated && currentPage === "authorPostthree" &&  <Authorpostthree onChecklist={handleNextChecklist} />}
      {isAuthenticated && currentPage === "checklist" && <Checklist onNext={handleAnotherPage} />}
      {isAuthenticated && currentPage === "anotherPage" && <AnotherPage />}



      
    </div>
  );
}

export default App;
