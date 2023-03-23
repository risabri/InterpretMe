import { useState } from "react";
import '../style/Checklist.css';

const Checklist = ({ onNext }) => {
  const [checkedItems, setCheckedItems] = useState(Array(10).fill(false));
  const allChecked = checkedItems.every((item) => item);

  const handleChange = (event) => {
    const { name, checked } = event.target;
    const index = parseInt(name.substr(4));
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = checked;
    setCheckedItems(newCheckedItems);
  };

  const handleClick = () => {
    if (allChecked) {
      onNext();
    }
  };

  return (
    <div>
      <h1>Checklist</h1>

  <div className="checklist-item">

      <div>
        <label>
          <input
            type="checkbox"
            name="item0"
            checked={checkedItems[0]}
            onChange={handleChange}
          />
           <span>

       
         
          I understand and agree that this interpretation process is ONLY to reflect and contextualize social media posts to avoid personal biases in the interpretation process to upload digital human rights and social justice in the interpretation process to reduce any real time negative consequences.
          </span>
            </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="item1"
            checked={checkedItems[1]}
            onChange={handleChange}
          />
          <span>

         
          I confirm that no personally identifiable information gathered from any party (post author and their stakeholders) and used in any part of the interpretation repor
          </span></label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="item2"
            checked={checkedItems[2]}
            onChange={handleChange}
          />
          I confirm that I have received consent from all parties to include their opinions and reflections in the interpretation report.  
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="item3"
            checked={checkedItems[3]}
            onChange={handleChange}
          />
          I understand and agree that I have no rights to share or disclose any information gathered in the interpretation process and final report with any individuals, organizations, online platforms, and institutions.  
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="item4"
            checked={checkedItems[4]}
            onChange={handleChange}
          />
          All the information gathered through the live interpretation process will be kept confidential and will not be disclosed to anyone or for any other purpose other than prevention of wrong punitive action and negative digital footprint.  
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="item5"
            checked={checkedItems[5]}
            onChange={handleChange}
          />
          I  confirm that any part of the report/full interpretation report will not be used as evidence for legal proceedings/disciplinary against authors/other involved stakeholders.
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="item6"
            checked={checkedItems[6]}
            onChange={handleChange}
          />
          I confirm that all the information gathered in this interpretation process are true opinion/reflections of the stakeholders and no information is modified/altered by the interpreter.
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="item7"
            checked={checkedItems[7]}
            onChange={handleChange}
          />
          I understand and agree that InterpretMe webtool only helps me to reflect on the social media post in a community-centered approach to contextualize it for better socio-cultural context, I take personal responsibility for making final decisions about the post.
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="item8"
            checked={checkedItems[8]}
            onChange={handleChange}
          />
           understand and agree that this interpretation information/report will be used/stored ONLY three months and after three months, no longer this interpretation valid. 
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="item9"
            checked={checkedItems[9]}
            onChange={handleChange}
          />
          I agree that I will be held responsible for ensuring that all declarations in this regard are truthful, complete, and accurate.
        </label>
      </div>
      
      
      {allChecked && (
        <button onClick={handleClick}>Report</button>
      )}
    </div>
    </div>
  );
};

export default Checklist;
    
   
