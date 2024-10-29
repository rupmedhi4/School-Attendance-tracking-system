import React, { useEffect, useState } from 'react';
import { createClass, fetchClasses } from '../../redux/slices/ClassSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function CreateClass() {
    const [className, setClassName] = useState(""); 

    const dispatch = useDispatch();
    const classes = useSelector((state) => state.classReducer.allClass);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createClass({
            className: className.trim()
        })).then(() => {
            // Fetch classes again after adding a new one
            dispatch(fetchClasses());
        });

        setClassName('');
    };

    useEffect(() => {
        // Initially fetch classes when the component mounts
        dispatch(fetchClasses());
    }, [dispatch]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800 text-center">Create New Class</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="addClass" className="block text-gray-600 font-medium mb-1">
                            Class Name
                        </label>
                        <input
                            type="text"
                            name="addClass"
                            value={className}
                            onChange={(e) => setClassName(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter class name"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none"
                    >
                        Add Class
                    </button>
                </form>

                <div className="mt-6">
                    <h3 className="text-lg font-medium text-gray-800">All Classes</h3>
                    <div className="space-y-2 mt-3">
                        {classes.map((name, index) => (
                            <h1 key={index} className="p-3 bg-gray-100 rounded-md shadow-sm text-gray-700 text-center">
                                {name.className}
                            </h1>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
