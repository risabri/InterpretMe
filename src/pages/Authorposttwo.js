import { save_authorposttwo_data } from '../pages/Fetcher';
import '../style/Authorposttwo.css';
import React, { useState } from 'react';
import logo1 from '../components/logo1.svg';
// import { load_post_written } from '../pages/Fetcher';

const Authorposttwo = ({ onAuthorpostthree }) => {
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [q3, setQ3] = useState('');
  const [q4, setQ4] = useState('');
  const [q5, setQ5] = useState('');
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`Q1: ${q1}, Q2: ${q2}, Q3: ${q3}, Q4: ${q4}, Q5: ${q5}`);
    
    try {
      await save_authorposttwo_data({
        "reflection_family": q1,
        "reflection_friend": q3,
        "check_options": q5
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
     Stage 2 : Reflect
      </h1>
      <form onSubmit={handleSubmit}>

        
        <div className="question">
          <label htmlFor="q1">Please reflect as if you’re an immediate family member (Ex: mother, father, brothers, sisters, and cousins) 
          how would you understand this post? What would be possible reasons for the post? Please share your reflections below* </label>
          <textarea id="q1" name="q1" value={q1} onChange={(e) => setQ1(e.target.value)} />

        </div>
        <div className="question">
          <label htmlFor="q3">Please reflect with your friend and/or a colleague who have similar identity and lived experiences 
          of the post author and ask about their understanding of the post? What would be possible reasons for the post? Please add their inputs below. </label>
          <textarea id="q3" name="q3" value={q3} onChange={(e) => setQ3(e.target.value)} />
        </div>
        <div className="question">
        <label htmlFor="q5">Please check all the applicable options </label>
                <select id="q5" name="q5" value={q5} onChange={(e) => setQ5(e.target.value)} className="dropdown">/
                    <option value="I don't have a friend or a colleague with similar identity">I don't have a friend or a colleague with similar identity</option>
                    <option value="I don't want to talk to my friends or colleague">I don't want to talk to my friends or colleague </option>
     
                </select>
        </div>
        <div className="button-container">
    <button type="submit" className="submit-button">Submit</button>
    <button onClick={onAuthorpostthree}>Next</button>
</div>
      </form>
    </div>
</div>
  );
};

export default Authorposttwo;


