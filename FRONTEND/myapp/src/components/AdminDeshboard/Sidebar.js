// Sidebar.js
import React from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
const navigate = useNavigate()

  const createClass = ()=>{
    navigate("/class/create")
  }

  return (
    <div className="bg-gray-200 w-60 h-screen p-4 flex flex-col space-y-4">
      <div className="flex items-center flex-col">
        <div className="w-20 h-20 bg-purple-300 rounded-full mb-2"></div>
        <h2 className="text-lg font-bold text-purple-700">Admin Dashboard</h2>
      </div>
      <Button text="Home" />
      <Button text="Add Class" onClick={createClass}/>
      <Button text="Add Role" />
      <Button text="Profile" />
    </div>
  );
};

export default Sidebar;
