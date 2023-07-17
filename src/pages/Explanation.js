import '../style/Explanation.css';
import React, { useState, useEffect  } from 'react';
import logo1 from '../components/logo1.svg';
import { save_explanation_data } from "./Fetcher";
import axios from 'axios';

const Explanation = ({ onDetailpage }) => {
  const [selectedItems, setSelectedItems] = useState({
    Text: false,
    Emoji: false,
    Image: false,
    Location: false,
    People_tagged: false,
    Video: false,
  });

  const [descriptions, setDescriptions] = useState({ text: '', emoji: '', image: '', location: '', people: '', video: '' });
  const [picture, setPicture] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [flaskPostResponse, setflaskPostResponse] = useState(null);

  useEffect(() => {
    if (picture) {
      const url = URL.createObjectURL(picture);
      setImageURL(url);

      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [picture]);

  const onClickUpload = () => {
    const formData = new FormData();
    formData.append(
      "file",
      picture,
      picture.name
    );

    axios.post("http://0.0.0.0:5000/profile_pic_download", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    }).then((response) => {
      const res = response.data;
      setflaskPostResponse({res});
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    });
  };

  const handleCheckboxChange = (event) => {
    setSelectedItems({ ...selectedItems, [event.target.name]: event.target.checked });
  };

  const handleDescriptionChange = (event) => {
    const { name, value } = event.target;
    setDescriptions((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      selectedItems,
      descriptions,
      picture,
    };
  
    try {
      await save_explanation_data(data);
      console.log('Data saved successfully!');
    } catch (error) {
      console.log('There was an error saving the data', error);
    }
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
          <div>
            <button onClick={onClickUpload}>
              Upload to server!
            </button>
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
          <div className="button-container">
            <button type="submit">Save</button>
            <button type="button" onClick={onDetailpage}>Next </button> 
          </div>
        </form>
      </div>
    </div>
  );
};

export default Explanation;
