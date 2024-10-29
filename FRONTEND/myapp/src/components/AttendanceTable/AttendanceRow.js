// src/components/AttendanceTable/AttendanceRow.js
import React from "react";
import AttendanceCheckbox from "./AttendanceCheckbox";

const AttendanceRow = ({ student }) => {
  return (
    <div className="flex justify-between items-center border-b p-2">
      <div className="w-1/4 text-center">{student.rollNo}</div>
      <div className="w-1/4 text-center">{student.name}</div>
      <div className="w-1/4 text-center">{student.class}</div>
      <div className="w-1/4 text-center">
        <AttendanceCheckbox />
      </div>
    </div>
  );
};

export default AttendanceRow;
