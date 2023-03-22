import React from 'react';

const Checklist = ({ onNext }) => {
  const [checkedItems, setCheckedItems] = React.useState({});

  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  const handleNext = () => {
    if (Object.values(checkedItems).every((isChecked) => isChecked)) {
      onNext();
    } else {
      alert('Please check all the items before proceeding.');
    }
  };

  return (
    <div>
      <h2>Checklist</h2>
      <div>
        <input
          type="checkbox"
          id="item1"
          name="item1"
          checked={checkedItems['item1'] || false}
          onChange={handleChange}
        />
        <label htmlFor="item1">Item 1</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="item2"
          name="item2"
          checked={checkedItems['item2'] || false}
          onChange={handleChange}
        />
        <label htmlFor="item2">Item 2</label>
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Checklist;
