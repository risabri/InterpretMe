
import '../style/Authorpostfour.css';
import React, { useState } from 'react';
import logo1 from '../components/logo1.svg';
import { save_authorpostfour_data } from '../pages/Fetcher';

const Authorpostfour = ({onChecklist}) => {
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`Q1: ${q1}, Q2: ${q2}`);

    try {
      await save_authorpostfour_data({
        "interpretation": q1,
        "harm_level": q2,
      });
      console.log("Data saved successfully!");
    } catch (error) {
      console.log("Error saving data: ", error);
    }
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
        <button type="submit" className="submit-button">Submit</button>
            
        <button onClick={onChecklist}>Next</button>
        </div>
      </form>
    </div>
</div>
  );
};

export default Authorpostfour;


