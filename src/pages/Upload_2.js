import '../style/Upload_2.css';
import React from 'react';


const Upload_2 = () => {



const fileInput = document.querySelector('#file-input');
const fileTypeSelect = document.querySelector('#file-type-select');
const nextButton = document.querySelector('#next-button');


let uploadedFile = null;
let fileType = null;

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  uploadedFile = file;
});

fileTypeSelect.addEventListener('change', (event) => {
  const selectedOption = event.target.value;
  fileType = selectedOption;
});


nextButton.addEventListener('click', () => {
  if (!uploadedFile) {
    alert('Please select a file to upload.');
    return;
  }

  if (!fileType) {
    alert('Please select the type of file you are uploading.');
    return;
  }

  // Perform the file upload here using the uploadedFile and fileType variables

  // Redirect to the next page
  window.location.href = 'https://example.com/next-page';
});

return (
  <div>
    <input id="file-input" type="file" />
    <select id="file-type-select">
      <option value="">Select a file type</option>
      <option value="pdf">PDF</option>
      <option value="doc">DOC</option>
      <option value="txt">TXT</option>
    </select>
    <button id="next-button">Next</button>
  </div>
);
};

export default Upload_2;
