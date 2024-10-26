## Required API Routes

### 1. Class Routes:
- `POST /classes` – Create a new class.
- `GET /classes` – Get all classes.
- `GET /classes/:classId` – Fetch a specific class by ID.

### 2. Subject Routes (for each class):
- `POST /classes/:classId/subjects` – Add a new subject to a specific class.
- `GET /classes/:classId/subjects` – Fetch all subjects for a specific class.

### 3. Student Routes:
- `POST /classes/:classId/students` – Add a student to a specific class.
- `GET /classes/:classId/students` – Fetch all students in a specific class.
- `PUT /classes/students/:studentId` – Update student data.
- `DELETE /classes/students/:studentId` – Remove a student from the class.

### 4. Attendance Routes:
- `POST /classes/:classId/attendance` – Mark attendance for students in a specific class.
- `GET /classes/:classId/attendance` – Fetch attendance records for a specific class.

### 5. Individual Student Attendance Routes:
- `GET /students/:classId/:studentId/attendance` – View complete attendance record for a specific student.


### 6. Admin Reports :
- `GET /classes/:classId/attendance` – get all students attendance

### 7. Class-wise Student Attendance Summary:
- `GET /classes/:classId/attendance/summary` – Get total attendance summary for a specific class.
