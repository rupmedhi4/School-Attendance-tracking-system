// src/components/AttendanceTable/AttendanceCheckbox.js
import React, { useState } from "react";

const AttendanceCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <input
      type="checkbox"
      checked={isChecked}
      onChange={handleCheckboxChange}
      className="h-4 w-4 accent-purple-500"
    />
  );
};

export default AttendanceCheckbox;
