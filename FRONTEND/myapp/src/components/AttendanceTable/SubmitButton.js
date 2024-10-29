import React from "react";

const SubmitButton = () => {
  const handleSubmit = () => {
    alert("Attendance Submitted!");
  };

  return (
    <button
      onClick={handleSubmit}
      className="w-full mt-4 bg-purple-600 text-white p-2 rounded hover:bg-purple-700 transition"
    >
      Submit Attendance
    </button>
  );
};

export default SubmitButton;
