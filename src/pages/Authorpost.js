import { save_authorpost_data } from '../pages/Fetcher';
import '../style/Authorpost.css';
import React, { useState } from 'react';
import logo1 from '../components/logo1.svg';


const Authorpost = ({ onAuthorposttwo }) => {
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [q3, setQ3] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`Q1: ${q1}, Q2: ${q2}, Q3: ${q3}`);
    
    try {
      await save_authorpost_data({
        "author_online_experiences": q3,
        "social_engagements": q1,
        "check_option": q2
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
      Stage 1 : Learn 
      </h1>
      <form onSubmit={handleSubmit}>


      <div className="question">
          <label htmlFor="q1">Please try to learn more about authors online and social media experiences and share your inputs and thoughts.*  </label>
          <textarea id="q1" name="q3" value={q3} onChange={(e) => setQ3(e.target.value)} />
        </div>



        <div className="question">
          <label htmlFor="q1"> Please  check publicly available social engagements, commitments (Ex: Volunteering and community Service) of the authors and add your learnings*  </label>
          <textarea id="q1" name="q1" value={q1} onChange={(e) => setQ1(e.target.value)} />
        </div>



        <div className="question">
        <label htmlFor="q2">Please check all the applicable options </label>
        <select id="q2" name="q2" value={q2} onChange={(e) => setQ2(e.target.value)} className="dropdown">
         <option value="noinfo">No information online about the author’s post</option>
          <option value="fake">This feels like a fake social media profile</option>
           <option value="noaccess">I do not have access to private profiles to learn more about the author </option>
        </select>
        </div>

        <div className="button-container">
        <button type="submit" className="submit-button">Submit</button>
        <button onClick={onAuthorposttwo}>Next</button>
        </div> 
      </form>
    </div>
</div>
  );
};

export default Authorpost;


