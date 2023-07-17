
import '../style/Detailpage.css';
import {save_detail_data} from '../pages/Fetcher';
import React, { useState } from 'react';
import logo1 from '../components/logo1.svg';
import axios from 'axios'; // Import axios
import Airtable from 'airtable';



const Detailpage = ({ onAuthorpost }) => {
  const [DP1, setDP1] = useState('');
  const [DP2, setDP2] = useState('');
  const [picture, setPicture] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    await save_detail_data({ "detailpage1": DP1, "detailpage2": DP2 });
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
          <textarea id="q1" name="q1" value={DP1} onChange={(e) => setDP1(e.target.value)} />
        </div>
        <div className="question">
          <label htmlFor="q3">How would you use this interpretation as part of your profession? *</label>
          <textarea id="q3" name="q3" value={DP2} onChange={(e) => setDP2(e.target.value)} />
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


