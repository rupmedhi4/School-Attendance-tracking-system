import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AttendanceTable from './components/AttendanceTable/AttendanceTable';
import Sidebar from './components/AdminDeshboard/Sidebar';
import Header from './components/AdminDeshboard/Header';
import GetAllClasses from './components/Class/GetAllClasses';
import CreateClass from './components/Class/CreateClass';
import SingleClassDetails from './components/Class/SingleClassDetails';

const App = () => {
  const students = [
    { rollNo: 1, name: "John Doe", class: "10th" },
    { rollNo: 2, name: "Jane Doe", class: "10th" },
    { rollNo: 3, name: "Sam Smith", class: "10th" },
  ];

  return (
    <Router>
      <div className="flex min-h-screen bg-gray-800">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <main className="p-6">
            <Routes>
              <Route path="/" element={<AttendanceTable students={students} />} />
              <Route path="/all/class" element={<GetAllClasses/>} />
              <Route path="/class/create" element={<CreateClass/>} />
              <Route path="/class/details" element={<SingleClassDetails/>} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
