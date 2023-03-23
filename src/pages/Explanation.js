
import '../style/Detailpage.css';
import React, { useState } from 'react';
import logo1 from '../components/logo1.svg';

const Explanation = ({ onAuthorpost }) => {
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

        
      <h1 className="title"> </h1>
      <form onSubmit={handleSubmit}>
        <div className="question">
          <label htmlFor="q1">Please explain why would you like to interpret this Social Media content ? </label>
          <textarea id="q1" name="q1" value={q1} onChange={(e) => setQ1(e.target.value)} />
        </div>
        <div className="question">
        <label htmlFor="q2">What are some content of the post?</label>
                <select id="q2" name="q2" value={q2} onChange={(e) => setQ2(e.target.value)} className="dropdown">
                    <option value="text">Text</option>
                    <option value="emoji">Emoji</option>
                    <option value="option3">image</option>
                </select>
        </div>

        <div className="question">
          <label htmlFor="q3">Please share your initial thoughts and reflections of the uploaded post. </label>
          <textarea id="q3" name="q3" value={q3} onChange={(e) => setQ3(e.target.value)} />
        </div>
        <div className="button-container">
        <button onClick={onAuthorpost}>Next </button>
        </div>
      </form>
    </div>
</div>
  );
};

export default Explanation;


