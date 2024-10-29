import React from 'react';
import Button from './Button';
import { fetchClasses } from '../../redux/slices/ClassSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();

  const fetchAllClasses = () => {
    navigate("/all/class")
  };

  return (
    <div className="bg-gray-100 p-4 flex justify-around items-center">
      <Button text="All Classes" onClick={fetchAllClasses} />
      <Button text="All Students" />
      <Button text="Update Students" />
      <Button text="Delete Students" />
      <Button text="All Attendance" />
      <Button text="Single Student Attendance" />
    </div>
  );
};

export default Header;
