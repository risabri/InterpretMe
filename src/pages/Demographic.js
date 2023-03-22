import React, { useState } from 'react';
import '../style/Demographic.css';
import logo1 from '../components/logo1.svg';

const Demographic = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [sexuality, setSexuality] = useState('');
  const [education, setEducation] = useState('');
  const [race, setRace] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can use the state values to store data in the database.
    console.log({ firstName, lastName, gender, sexuality, education, race });
  };

  return (
    <div className="demographic-container">
      <img src={logo1} alt="logo1" className="logo" />
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="title">Please tell us about you so we can complete your profile </h2>
        <div className="input-container">
          <label className="label">First Name</label>
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
            <option value="cc">Community College</option>
            <option value="cd">College Degree</option>
            <option value="gd">Graduate Degree</option>
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
            <option value="pacific">Pacific Decent</option>
          </select>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Demographic;
