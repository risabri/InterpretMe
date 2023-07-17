  
import '../style/Detailpage.css';
import '../style/Explanation.css';
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

  // explanation.js 

  export async function save_explanation_data(data) {
    const airtable_url = process.env.REACT_APP_API_URL;
    const apiKey = process.env.REACT_APP_API_KEY;

    const selectedOptions = Object.keys(data.selectedItems).filter(item => data.selectedItems[item]);
    const descriptionString = Object.entries(data.descriptions)
    .map(([key, value]) => `${key}: ${value}`)
    .join(', ');

    const postData = {
        "records": [
            {
                "fields": {
                    "check": selectedOptions,
                    "data_description": descriptionString, 
                }
            }
        ]
    };

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
  



// for detail.js


export async function save_detail_data(fields) {
  const airtable_url = process.env.REACT_APP_API_URL;
  const apiKey = process.env.REACT_APP_API_KEY;

  const data = {
    "records": [
      {
        "fields": {
          "detailpage1" : fields["detailpage1"],
          "detailpage2" : fields["detailpage2"],
        }
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

// for authotpost 

export async function save_authorpost_data(data) {
  const airtable_url = process.env.REACT_APP_API_URL;
  const apiKey = process.env.REACT_APP_API_KEY;

  const postData = {
    "records": [
      {
        "fields": {
          "author_online_experiences": data["author_online_experiences"],
          "social_engagements":data["social_engagements"],
          "check_option":data["check_option"],
        }
      }
    ]
  };

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




// for Authorposttwo
export async function save_authorposttwo_data(data) {
  const airtable_url = process.env.REACT_APP_API_URL;
  const apiKey = process.env.REACT_APP_API_KEY;
  const postData = {
    "records": [
      {
        "fields": {
          "reflection_family": data["reflection_family"],
          "reflection_friend": data["reflection_friend"],
          "check_options": data["check_options"],
        }
      }
    ]
  };

  if (data) {
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



//authorpostthree
export async function save_authorpostthree_data(data) {
  const airtable_url = process.env.REACT_APP_API_URL;
  const apiKey = process.env.REACT_APP_API_KEY;

  const postData = {
    "records": [
      {
        "fields": {
          "understanding": data["understanding"],  
          "options": data["options"],
          "mental_health": data["mental_health"],
          "media_influence": data["media_influence"]
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

//authotpostfour

export async function save_authorpostfour_data(data) {
  const airtable_url = process.env.REACT_APP_API_URL;
  const apiKey = process.env.REACT_APP_API_KEY;

  const postData = {
    "records": [
      {
        "fields": {
          "interpretation": data["interpretation"],
          "harm_level": data["harm_level"],
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


//cheklist : 
export async function save_checklist_data(data) {
  const airtable_url = process.env.REACT_APP_API_URL;
  const apiKey = process.env.REACT_APP_API_KEY;

  const postData = {
    "records": [
      {
        "fields": {
          "checklist": data["checklist"]
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