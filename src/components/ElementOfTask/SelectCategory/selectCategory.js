import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

function SelectCategory({ tab, saveChangeColor, categoryColor }) {
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorChange = (e) => {
    const selectedCategory = tab.categories.find(category => category.hex === e.target.value);
    setSelectedColor("");
    saveChangeColor(selectedCategory);
    setSelectedColor(e.target.value);
  };

  return (
    <div>
      <select className="m-1 w-20" value={selectedColor} onChange={handleColorChange} style={{ backgroundColor: categoryColor() }} >
        <option value=""></option>
        {tab.categories.map((category) => (
          <option key={category.hex} value={category.hex} style={{ backgroundColor: category.hex }} className="w-5"><FontAwesomeIcon icon={faCircle} /></option>
        ))}
      </select>
    </div>
  );
}

export default SelectCategory;