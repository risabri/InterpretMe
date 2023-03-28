
import '../style/Authorpost.css';
import React, { useState } from 'react';
import logo1 from '../components/logo1.svg';

const Authorpostthree = ({onChecklist}) => {
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
      Stage 3 : Contextualize
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="question">
          <label htmlFor="q1">What is your understanding about social circumstance,
           cultural background, and linguistic expressions on this social media post? 
           Please add your inputs below.* </label>
          <textarea id="q1" name="q1" value={q1} onChange={(e) => setQ1(e.target.value)} />
        </div>
        <div className="question">
        <label htmlFor="q2">Please check all the applicable options</label>
                <select id="q2" name="q2" value={q2} onChange={(e) => setQ2(e.target.value)} className="dropdown">/
                    <option value="noinfo">I have no idea about the socio-cultural and linguistic background of the author and this post.</option>
                    <option value="fake">There is no means to understand socio-cultural and linguistic background  </option>
                    {/* <option value="noaccess"> </option> */}
     
                </select>
        </div>

        <div className="question">
          <label htmlFor="q3">Do you think this post was made under circumstances of 
          the mental health challenges? (Ex: grief, loss, stress, anxiety, depression) Please share your thoughts below.*  </label>
          <textarea id="q3" name="q3" value={q3} onChange={(e) => setQ3(e.target.value)} />
        </div>

        <div className="question">
          <label htmlFor="q4">Do you think this post was influenced or part of
           the mass media content? (Ex. song lyrics, pickup lines, movie dialogue and
            other media content) Please share your reflections.* </label>
          <textarea id="q4" name="q4" value={q4} onChange={(e) => setQ4(e.target.value)} />
        </div>
        <div className="button-container">
            
        <button onClick={onChecklist}>Next</button>
        </div>
      </form>
    </div>
</div>
  );
};

export default Authorpostthree;


