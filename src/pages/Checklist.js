import { useState } from "react";

const Checklist = ({ onNext }) => {
  const [checkedItems, setCheckedItems] = useState(new Set());

  const handleChange = (e) => {
    const item = e.target.name;
    const isChecked = e.target.checked;

    setCheckedItems((prevCheckedItems) => {
      const newCheckedItems = new Set(prevCheckedItems);
      isChecked ? newCheckedItems.add(item) : newCheckedItems.delete(item);
      return newCheckedItems;
    });
  };

  const allChecked = checkedItems.size === 10;

  const handleClick = () => {
    if (allChecked) {
      onNext();
    }
  };

  return (
    <div>
      <h1>Checklist</h1>
      {Array.from({ length: 10 }, (_, i) => `c${i + 1}`).map((item) => (
        <div key={item}>
          <label>
            <input
              type="checkbox"
              name={item}
              onChange={handleChange}
            />
            {item}
          </label>
        </div>
      ))}
      {allChecked && (
        <button onClick={handleClick}>Go to another page</button>
      )}
    </div>
  );
};

export default Checklist;
