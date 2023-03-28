
import '../style/Authorposttwo.css';
import React, { useState } from 'react';
import logo1 from '../components/logo1.svg';
import { load_post_written } from '../pages/Fetcher';

const Authorposttwo = ({ onAuthorPostthree }) => {
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [q3, setQ3] = useState('');
  const [q4, setQ4] = useState('');
  const [q5, setQ5] = useState('');
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can use the q1, q2, and q3 values here to do something with the user's input
    console.log(`Q1: ${q1}, Q2: ${q2}, Q3: ${q3}, Q3: ${q4}, Q3: ${q5}`);
    // Redirect to the next page here
    await load_post_written(q1) // if i want q1 to go in the filed of name 
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
        {/* <div className="question">
        <label htmlFor="q2">Please check all the applicable options </label>
                <select id="q2" name="q2" value={q2} onChange={(e) => setQ2(e.target.value)} className="dropdown">/
                    <option value="noinfo">No information online about the author’s post</option>
                    <option value="fake">This feels like a fake social media profile</option>
                    <option value="noaccess">I do not have access to private profiles to learn more about the author </option>
     
                </select>
        </div> */}

        <div className="question">
          <label htmlFor="q3">Please reflect with your friend and/or a colleague who have similar identity and lived experiences 
          of the post author and ask about their understanding of the post? What would be possible reasons for the post? Please add their inputs below. </label>
          <textarea id="q3" name="q3" value={q3} onChange={(e) => setQ3(e.target.value)} />
        </div>
        <div className="question">
        <label htmlFor="q5">Please check all the applicable options </label>
                <select id="q5" name="q5" value={q5} onChange={(e) => setQ5(e.target.value)} className="dropdown">/
                    <option value="nofriend">I don't have a friend or a colleague with similar identity</option>
                    <option value="notalk">I don't want to talk to my friends or colleague </option>
     
                </select>
        </div>
        <div className="button-container"> 
        <button onClick={onAuthorPostthree}>Next</button>
        </div>
      </form>
    </div>
</div>
  );
};

export default Authorposttwo;


