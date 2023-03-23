
import '../style/Detailpage.css';
import React, { useState } from 'react';
import logo1 from '../components/logo1.svg';
import axios from 'axios'; // Import axios
import Airtable from 'airtable';

const Detailpage = ({onAuthorpost}) => {
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [q3, setQ3] = useState('');
  const [picture, setPicture] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(`Q1: ${q1}, Q2: ${q2}, Q3: ${q3}`);

    let pictureUrl = '';

    const apiKey = 'patOKbcDZPh471ZJx.9a731e09d49e5bdcd2d8de1d733de44bb0ce0881a175b86145d32d4c1f80ab1b';
    const apiUrl = 'https://api.airtable.com/v0/appkf16Kyl7p9Fe7z/tblnBXmuxJ1lCAqqP';

    if (picture) {
      // Upload the picture to Airtable
      const formData = new FormData();
      formData.append('file', picture);
      formData.append('filename', picture.name);
      formData.append('content_type', picture.type);

      try {
        const response = await axios.post(
          `${apiUrl}/attachments`,
          formData,
          {
            headers: {
              'Authorization': `Bearer ${apiKey}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        pictureUrl = response.data[0].url;
        console.log('Picture uploaded successfully');
      } catch (error) {
        console.error('Error uploading picture:', error);
      }
    }

    // Create a new record in Airtable with the user's input and picture URL
    try {
      await axios.post(apiUrl, {
        fields: {
          // "Field_name_1": q1,
          // "Field_name_2": q2,
          // "Field_name_3": q3,
          "Picture": [{ "url": pictureUrl }],
        },
      }, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      });
      console.log("Record added to Airtable successfully");
    } catch (error) {
      console.error("Error adding record to Airtable:", error);
    }
  };

  return (
<div className="logoContainer"> 
      <img src={logo1} alt="logo1" className="logo" />
      <div className="container">

                  <div className="question">
              <label htmlFor="picture">Upload a picture: </label>
              <input
                type="file"
                id="picture"
                name="picture"
                accept="image/*"
                onChange={(e) => setPicture(e.target.files[0])}
              />
            </div>


        
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
        <button onClick={onAuthorpost}>Next </button>
        </div>
      </form>
    </div>
</div>
  );
};

export default Detailpage;


