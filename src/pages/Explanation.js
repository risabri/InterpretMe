import '../style/Explanation.css';
import React, { useState, useEffect  } from 'react';
import logo1 from '../components/logo1.svg';

const Explanation = ({ onDetailpage }) => {
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [q3, setQ3] = useState('');
  const [selectedItems, setSelectedItems] = useState({ text: false, emoji: false, image: false, location : false, people : false, video : false  });
  const [descriptions, setDescriptions] = useState({ text: '', emoji: '', image: '', location: '', people: '', video: '' });
  const [picture, setPicture] = useState(null);
  const [imageURL, setImageURL] = useState('');

    
  useEffect(() => {
    if (picture) {
      const url = URL.createObjectURL(picture);
      setImageURL(url);

      // Cleanup the created URL when component unmounts or a new picture is uploaded
      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [picture]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedItems((prevState) => ({ ...prevState, [name]: checked }));
  };

  const handleDescriptionChange = (event) => {
    const { name, value } = event.target;
    setDescriptions((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Q1: ${q1}, Q2: ${q2}, Q3: ${q3}`);
    console.log('Selected items:', selectedItems);
    console.log('Descriptions:', descriptions);
    // Redirect to the next page here
  };

  return (
    <div className="logoContainer ">
     <img src={imageURL || logo1} alt="logo1" className={imageURL ? "uploaded-image" : "logo"} />

      <div className="container">
        <h1 className="title"> </h1>
        <form onSubmit={handleSubmit}>
          <div className="question">
            <label htmlFor="picture">Please upload Social Media post you would like to interpret </label>
            <input
              type="file"
              id="picture"
              name="picture"
              accept="image/*"
              onChange={(e) => setPicture(e.target.files[0])}
            />
          </div>
         
          <div className="question">
            <label>Please select all applicable media content in the post and describe what you understand from them.*</label>
            {['Text', 'Emoji', 'Image', 'Location', 'People tagged', 'Video'].map((item) => (
              <div key={item} className="checkbox-container">
                <div className="checkbox-item">
                <input
                  type="checkbox"
                  id={`checkbox-${item}`}
                  name={item}
                  checked={selectedItems[item]}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor={`checkbox-${item}`}>{item}</label>
                </div>
                <input
                  type="text"
                  id={`description-${item}`}
                  name={item}
                  value={descriptions[item]}
                  onChange={handleDescriptionChange}
                  disabled={!selectedItems[item]}
                  className="description-input"
                  placeholder={`Describe ${item}`}
                />
                  
              </div>
            ))}
          </div>
          {/* <div className="question">
            <label htmlFor="q3">Please describe the purpose of using InterpretMe. </label>
            <textarea id="q3" name="q3" value={q3} onChange={(e) => setQ3(e.target.value)} />
          </div> */}
          <div className="button-container">
            <button onClick={onDetailpage}>Next </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Explanation;
