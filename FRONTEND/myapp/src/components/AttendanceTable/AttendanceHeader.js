import React from "react";

const AttendanceHeader = () => {
  return (
    <div className="flex justify-between items-center pb-2 border-b">
      <div>
        <label className="block font-semibold">Classes</label>
        <select className="border p-2 rounded">
          <option>All Classes</option>
          <option>Class 1</option>
          <option>Class 2</option>
        </select>
      </div>
      <div>
        <label className="block font-semibold">Date</label>
        <input type="date" className="border p-2 rounded" />
      </div>
    </div>
  );
};

export default AttendanceHeader;
