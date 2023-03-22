
import '../style/Detailpage.css';
import React, { useState } from 'react';
import logo1 from '../components/logo1.svg';

const Detailpage = () => {
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
      We will ask you questions about the content of the post 
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="question">
          <label htmlFor="q1">Where was this post written ? </label>
          <textarea id="q1" name="q1" value={q1} onChange={(e) => setQ1(e.target.value)} />
        </div>
        <div className="question">
        <label htmlFor="q2">Who wrote the post ?</label>
                <select id="q2" name="q2" value={q2} onChange={(e) => setQ2(e.target.value)} className="dropdown">
                    <option value="student">Student</option>
                    <option value="Professor">Professor</option>
                    <option value="rw">Regular Worker</option>
                    <option value="youth">Youth</option>
                    <option value="potential">Portential Employee</option>
                    <option value="other">Other</option>
                </select>
        </div>

        <div className="question">
          <label htmlFor="q3">what type of content is in the post  ? </label>
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

export default Detailpage;


