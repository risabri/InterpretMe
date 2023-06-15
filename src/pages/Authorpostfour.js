
import '../style/Authorpostfour.css';
import React, { useState } from 'react';
import logo1 from '../components/logo1.svg';

const Authorpostfour = ({onChecklist}) => {
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [q3, setQ3] = useState('');
  const [q4, setQ4] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can use the q1, q2, and q3 values here to do something with the user's input
    console.log(`Q1: ${q1}, Q2: ${q2}, Q3: ${q3}, Q4: ${q4}`);
    // Redirect to the next page here
  };

  return (
<div className="logoContainer"> 
      <img src={logo1} alt="logo1" className="logo" />
      
            <div className="container">

        
      <h1 className="title"> 
      Stage 4 : Interpret to Act
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="question">
          <label htmlFor="q1">Please share your overall interpretation of the post* </label>
          <textarea id="q1" name="q1" value={q1} onChange={(e) => setQ1(e.target.value)} />
        </div>
        <h1 className="title"> 
      Stage 5 : Act
      </h1>

        <div className="question">
  <label>This post may cause (Please select anyone of the below options)*</label>
  <div className="button-group">
    <button
      className={`option-button ${q2 === "noinfo" ? "selected" : ""}`}
      onClick={() => setQ2("noinfo")}
    >
      No harm
    </button>
    <button
      className={`option-button ${q2 === "fake" ? "selected" : ""}`}
      onClick={() => setQ2("fake")}
    >
      Possible Harm
    </button>
     <button
      className={`option-button ${q2 === "noaccess" ? "selected" : ""}`}
      onClick={() => setQ2("noaccess")}
    >
      Probable Harm
    </button> 
  </div>
</div>
        <div className="button-container">
            
        <button onClick={onChecklist}>Next</button>
        </div>
      </form>
    </div>
</div>
  );
};

export default Authorpostfour;


