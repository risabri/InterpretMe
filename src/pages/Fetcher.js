  
import '../style/Detailpage.css';
import React, { useState } from 'react';
import logo1 from '../components/logo1.svg';
import axios from 'axios'; // Import axios
import Airtable from 'airtable';



// for demographic.js 

  export async function save_demographic_data(data) {
    const airtable_url = process.env.REACT_APP_API_URL;
    const apiKey = process.env.REACT_APP_API_KEY;
  
    
  const postData = {
    "records": [
      {
        "fields": {
           "FirstName": data["FirstName"],
           "LastName": data["LastName"],
           "Email": data["Email"],
           "Age": data["Age"],
           "Gender": data["Gender"],
           "Sexuality": data["Sexuality"],
         "Education": data["Education"],
           "Race": data["Race"]
        }
      }
    ]
  };
  
    if(data){
      try {
        const response = await axios.post(airtable_url, postData, {
          headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json"
          }
        });
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  }

  // explanation.js  : dont know how to upload pic in database

 
export async function save_explanation_data(data) {
  const airtable_url = process.env.REACT_APP_API_URL;
  const apiKey = process.env.REACT_APP_API_KEY;
  const { picture, selectedItems, descriptions } = data;
  const formData = new FormData();
  formData.append('fields[Picture]', picture);
  formData.append('fields[Selected Items]', JSON.stringify(selectedItems));
  formData.append('fields[Descriptions]', JSON.stringify(descriptions));

  if (picture && Object.values(selectedItems).some((value) => value)) {
    axios
      .post(airtable_url, formData, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'multipart/form-data', //here
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
  





// for detail.js


export async function load_post_written(fields) {
  const airtable_url = process.env.REACT_APP_API_URL;
  const apiKey = process.env.REACT_APPe_API_KEY;
  const data = {
    "records": [
      {
        "fields": fields
      }
    ]
  }
  if (fields) {
    axios.post(airtable_url, data, {
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      }

    }).then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    });
  }
}


