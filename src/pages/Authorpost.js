
import '../style/Authorpost.css';
import React, { useState } from 'react';
import logo1 from '../components/logo1.svg';

const Authorpost = () => {
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [q3, setQ3] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can use the q1, q2, and q3 values here to do something with the user's input
    console.log(`Q1: ${q1}, Q2: ${q2}, Q3: ${q3}`);
    // Redirect to the next page here
  };

  return (
<div className="logoContainer"> 
      <img src={logo1} alt="logo1" className="logo" />
      
            <div className="container">

        
      <h1 className="title"> 
      We will ask you questions about the author of the post 
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="question">
          <label htmlFor="q1">Please check publicly available social engagement, commitments ( example : volunteering and community service ) of the authors and add your learnings.  ? </label>
          <textarea id="q1" name="q1" value={q1} onChange={(e) => setQ1(e.target.value)} />
        </div>
        <div className="question">
        <label htmlFor="q2">Please check all the applicable options ?</label>
                <select id="q2" name="q2" value={q2} onChange={(e) => setQ2(e.target.value)} className="dropdown">/
                    <option value="noinfo">No information online about the author’s post</option>
                    <option value="fake">This feels like a fake social media profile</option>
                    <option value="noaccess">I do not have access to private profiles to learn more about the author </option>
     
                </select>
        </div>

        <div className="question">
          <label htmlFor="q3">Please reach out to your friends and family members who have the shared identity, socio-cultural 
                            context to help you to understand the context of the post. 
                            Please share their thoughts and your reflections below. </label>
          <textarea id="q3" name="q3" value={q3} onChange={(e) => setQ3(e.target.value)} />
        </div>

        




        <div className="button-container">
            
          <button type="submit" className="next-button">Next</button>
        </div>
      </form>
    </div>
</div>
  );
};

export default Authorpost;


