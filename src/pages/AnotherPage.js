// this is the final page, we will thank the user for their work and they will click on a button saying finish.

import report from '../components/report.png';

const AnotherPage = ({onThanks}) => {
    return (
      <div>
        <h1>Thank you for filling the form ! You will recieve an email with the report very soon </h1>
        <p>  </p>
        <img src={report} alt="logo1" className="report" />
        <div className="button-container">
        <button onClick={onThanks}>Next</button>
        </div> 
      </div>
      
    );
  };
  
  export default AnotherPage;


  
