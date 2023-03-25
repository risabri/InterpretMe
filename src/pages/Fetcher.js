  
import '../style/Detailpage.css';
import React, { useState } from 'react';
import logo1 from '../components/logo1.svg';
import axios from 'axios'; // Import axios
import Airtable from 'airtable';

export async function load_post_written(fieldname, q1){
    const airtable_url = process.env.REACT_APP_API_URL;
    const apiKey = process.env.REACT_APP_API_KEY;
    const data = {
        "records": [
          {
            "fields": {
                [fieldname]: q1
            }
          }
        ]
      }
    if(q1){
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