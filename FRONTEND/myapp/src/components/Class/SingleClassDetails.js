import React from 'react';
import { useSelector } from 'react-redux';

export default function SingleClassDetails() {
  const { singleClass } = useSelector((state) => state.classReducer);

  if (!singleClass || !singleClass.students) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      {/* Class Details */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h1 className="text-3xl font-bold mb-2">{singleClass.className}</h1>
        <p className="text-gray-600">Class created at: {new Date(singleClass.createdAt).toLocaleDateString()}</p>
        <p className="text-gray-600">Total Students: {singleClass.students.length}</p>
      </div>

      {/* Students Attendance Table */}
      <div className="overflow-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-3 px-5 border-b text-left text-gray-700 font-semibold">Student Name</th>
              <th className="py-3 px-5 border-b text-left text-gray-700 font-semibold">Roll No</th>
              <th className="py-3 px-5 border-b text-center text-gray-700 font-semibold">Total Days</th>
              <th className="py-3 px-5 border-b text-center text-green-600 font-semibold">Present Days</th>
              <th className="py-3 px-5 border-b text-center text-red-600 font-semibold">Absent Days</th>
              <th className="py-3 px-5 border-b text-center text-gray-700 font-semibold">Attendance</th>
            </tr>
          </thead>
          <tbody>
            {singleClass.students.map((student) => {
              const totalDays = student.attendance.length;
              const presentDays = student.attendance.filter((entry) => entry.present).length;
              const absentDays = totalDays - presentDays;

              return (
                <tr key={student.rollNumber}>
                  <td className="py-3 px-5 border-b text-gray-800">{student.name}</td>
                  <td className="py-3 px-5 border-b text-gray-800">{student.rollNumber}</td>
                  <td className="py-3 px-5 border-b text-center text-gray-800">{totalDays}</td>
                  <td className="py-3 px-5 border-b text-center text-green-600">{presentDays}</td>
                  <td className="py-3 px-5 border-b text-center text-red-600">{absentDays}</td>
                  <td className="py-3 px-5 border-b">
                    <div className="flex justify-center gap-1">
                      {student.attendance.map((attendance) => (
                        <span
                          key={attendance._id}
                          className={`text-lg ${attendance.present ? 'text-green-600' : 'text-red-600'}`}
                        >
                          {attendance.present ? '✓' : '✗'}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
