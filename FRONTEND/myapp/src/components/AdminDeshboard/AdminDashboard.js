import React from "react";
import AttendanceTable from "../AttendanceTable/AttendanceTable";
import Sidebar from "./Sidebar";

const AdminDashboard = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-100 p-4">
        <header className="flex flex-wrap gap-4 justify-center md:justify-start mb-4">
          <button className="bg-purple-700 text-white px-4 py-2 rounded-md">ALL CLASSES</button>
          <button className="bg-purple-700 text-white px-4 py-2 rounded-md">ALL STUDENTS</button>
          <button className="bg-purple-700 text-white px-4 py-2 rounded-md">UPDATE STUDENTS</button>
          <button className="bg-purple-700 text-white px-4 py-2 rounded-md">DELETE STUDENTS</button>
          <button className="bg-purple-700 text-white px-4 py-2 rounded-md">ALL ATTENDANCE</button>
          <button className="bg-purple-700 text-white px-4 py-2 rounded-md">SINGLE STUDENT ATTENDANCE</button>
        </header>
        <AttendanceTable />
      </div>
    </div>
  );
};

export default AdminDashboard;
