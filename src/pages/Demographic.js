import React, { useState } from 'react';
import '../style/Demographic.css';
import logo1 from '../components/logo1.svg';
import {save_demographic_data} from '../pages/Fetcher';


const Demographic = ({ onExplanation })  => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [sexuality, setSexuality] = useState('');
  const [education, setEducation] = useState('');
  const [race, setRace] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    //console.log({ firstName, lastName, gender, sexuality, education, race });
  
    try {
      await save_demographic_data({
        "FirstName": firstName,
        "LastName": lastName,
        "Email": email,
        "Age": age,
        "Gender": gender,
        "Sexuality": sexuality,
        "Education": education,
        "Race": race
      });
      console.log("Data saved successfully!");
    } catch (error) {
      console.log("Error saving data: ", error);
    }
  };



  return (
    <div className="demographic-container">
      <img src={logo1} alt="logo1" className="logo" />
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="title">Please complete your profile </h2>
        <div className="input-container">
          <label className="label">First  Name</label>
          <input
            className="text-input"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label className="label">Last Name</label>
          <input
            className="text-input"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label className="label">Email address</label>
          <input
            className="text-input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label className="label">Age</label>
          <input
            className="text-input"
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        

       




        <div className="input-container">
          <label className="label">Gender</label>
          <select
            className="dropdown"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="nonBinary">Non-Binary</option>
            <option value="genderFluid">Gender Fluid</option>
            <option value="genderQueer">Gender Queer</option>
            <option value="notlisted">Not listed </option>
            <option value="dontsay">Prefer not to say  </option>
          </select>
        </div>
        <div className="input-container">
          <label className="label">Sexuality</label>
          <select
            className="dropdown"
            value={sexuality}
            onChange={(e) => setSexuality(e.target.value)}
          >
            <option value="asex">Asexual</option>
            <option value="bi">Bisexual</option>
            <option value="gay">Gay-Lesbian</option>
            <option value="pan">Pansexual</option>
            <option value="queer">Queer</option>
            <option value="staright">Straight</option>
            <option value="notlisted">Not listed </option>
            <option value="dontsay">Prefer not to say  </option>
          </select>
        </div>
        <div className="input-container">
          <label className="label">Education</label>
          <select
            className="dropdown"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          >
            <option value="hs">High School / GED</option>
            <option value="cc">Some College</option>
            <option value="cd">College Degree</option>
            <option value="gd">Graduate Degree</option>
            <option value="phd">Doctorate (PhD/MD)</option>
          </select>
        </div>
        <div className="input-container">
          <label className="label">Race</label>
          <select
            className="dropdown"
            value={race}
            onChange={(e) => setRace(e.target.value)}
          >
            <option value="asian">Asian</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="hispanic">Hispianic/Latino</option>
            <option value="mena">Middle Eastern / Arab </option>
            <option value="multirace">Multiracial / Biracial </option>
            <option value="native">Native American </option>
            <option value="pacific">Pacific islander</option>
            <option value="nl">Not listed</option>
            <option value="pnts">Prefer not to say</option>
          </select>
        </div>
       <button type="submit" className="submit-button">
          Submit
        </button>
        <button onClick={onExplanation}>Next </button>
      </form>
    </div>
  );
}

export default Demographic;
