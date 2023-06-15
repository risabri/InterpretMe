
import '../style/Detailpage.css';
import React, { useState } from 'react';
import logo1 from '../components/logo1.svg';
import axios from 'axios'; // Import axios
import Airtable from 'airtable';
import {load_post_written} from '../pages/Fetcher';


const Detailpage = ({ onAuthorpost }) => {
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [q3, setQ3] = useState('');
  const [picture, setPicture] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    await load_post_written({ "detailpage1": q1, "detailpage2": q3 });
  }

  return (
<div className="logoContainer"> 
      <img src={logo1} alt="logo1" className="logo" />
      <div className="container">
      <h1 className="title"> 
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
        </div>
        <div className="question">
          <label htmlFor="q1">Please describe why do you like to Interpret this post?* </label>
          <textarea id="q1" name="q1" value={q1} onChange={(e) => setQ1(e.target.value)} />
        </div>
        <div className="question">
          <label htmlFor="q3">How would you use this interpretation as part of your profession? *</label>
          <textarea id="q3" name="q3" value={q3} onChange={(e) => setQ3(e.target.value)} />
        </div>
        <div className="button-container">
         <button type="submit">Submit</button> 
        <button onClick={onAuthorpost }>Next </button>
        </div>
      </form>
    </div>
</div>
  );
};

export default Detailpage;


