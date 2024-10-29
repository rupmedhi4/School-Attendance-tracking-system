import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClasses,setSingleClass } from '../../redux/slices/ClassSlice';
import { useNavigate } from 'react-router-dom';

export default function GetAllClasses() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const allClass = useSelector((state) => state.classReducer.allClass);
    
    useEffect(() => {
        dispatch(fetchClasses());
    }, [dispatch]);

    const handleClick = (id) => {
        const singleClass = allClass.find((classItem) => classItem._id === id);
        if (singleClass) {
            dispatch(setSingleClass(singleClass))
        }
        navigate("/class/details")
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-indigo-600 to-blue-500 py-10 px-4">
            <h1 className="text-4xl font-bold text-white mb-8">All Classes</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl w-full">
                {allClass.map((classItem) => (
                    <button 
                        key={classItem._id} 
                        onClick={() => handleClick(classItem._id)}
                        className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none"
                    >
                        <h1 className="text-2xl font-semibold text-gray-800">{classItem.className}</h1>
                    </button>
                ))}
            </div>
        </div>
    );
}
