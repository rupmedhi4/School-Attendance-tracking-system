import React from "react";
import AttendanceHeader from "./AttendanceHeader";
import AttendanceRow from "./AttendanceRow";
import SubmitButton from "./SubmitButton";

const AttendanceTable = ({ students }) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <AttendanceHeader />
      <div className="mt-4 space-y-2">
        {students.map((student) => (
          <AttendanceRow key={student.rollNo} student={student} />
        ))}
      </div>
      <SubmitButton />
    </div>
  );
};

export default AttendanceTable;
