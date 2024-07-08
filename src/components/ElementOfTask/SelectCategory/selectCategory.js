import React, { useState } from "react";

function SelectCategory({ tab, saveChangeColor, categoryColor }) {
  const [selectedColor, setSelectedColor] = useState("");
  const [categories] = useState(tab.categories || [])
 

  const handleColorChange = (e) => {
    const selectedCategory = categories.find(category => category.hex === e.target.value);
    setSelectedColor("");
    saveChangeColor(selectedCategory);
    setSelectedColor(e.target.value);
  };

  return (
    <div>
      <select className="m-1 w-20" value={selectedColor} onChange={handleColorChange} style={{ backgroundColor: categoryColor() }} >
        <option value=""></option>
        {categories.map((category) => (
          <option key={category.hex} value={category.hex} style={{ backgroundColor: category.hex }} className="w-5"></option>
        ))}
      </select>
    </div>
  );
}

export default SelectCategory;