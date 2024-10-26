# Classes API Documentation

## POST /classes

---

### Endpoint
- `POST /classes`

### Description
Creates a new class by accepting a `className` in the request body and returns the created class details.

### Request Headers
- `Content-Type: application/json`

### Request Body
```json
{
    "className": "string (required, max 4 characters)"
}
```
------------------------------------------------------------------------------------
| Field      | Type    |Required  | Description                                     |
|----------  |---------|----------|-------------------------------------------------|
| className  | String  | Yes	  | Class name, must be between 1 and 4 characters. |
-------------------------------------------------------------------------------------
=> Validation Rules
        className is required.
        className length should be between 1-4 characters.

Sample Request
```json
POST /classes
Content-Type: application/json
{
    "className": "10A"
}
```

### Success Response

- **Status**: `201 Created`
- **Description**: Class created successfully.

### Response Body
```json
{
    "message": "Class created successfully",
    "class": {
        "_id": "unique_class_id",
        "className": "10A",
        "createdAt": "2024-10-25T10:20:00.000Z",
        "updatedAt": "2024-10-25T10:20:00.000Z"
    }
}
```

### Error Responses

#### 400 Bad Request
- **Condition**: Missing or invalid `className`.

- **Response Body**:
    ```json
    {
        "message": "className is required"
    }
    ```
    **OR**
    ```json
    {
        "message": "className length should be between 1 and 4 characters"
    }
    ```

#### 500 Internal Server Error
- **Condition**: Unexpected server error or database issue.

- **Response Body**:
    ```json
    {
        "message": "Error creating class",
        "error": "Internal Server Error"
    }
    ```
### Middleware Validation

The `createClassValidation` middleware checks that `className`:
- is present in the request body.
- meets the length requirements (e.g., between 1 and 4 characters).

If validation passes, it calls the `createClass` controller; otherwise, it returns a 400 error.

### Developer Notes

- **Middleware**: `createClassValidation`
  - Used to validate the `className` field before passing control to the controller.

- **Controller**: `createClass`
  - This function saves the validated class to the MongoDB database and returns a success message upon successful creation.

-----------------------------------------------------------------------------------------------


## 2nd api
### GET /classes

---

### Endpoint
- `GET /classes`

### Description
Retrieves a list of all classes from the database.

### Request Headers
- None

### Responses

#### Success Response
- **Status**: `200 OK`
- **Description**: Successfully retrieved classes.
- **Response Body**:
    ```json
    [
        {
            "_id": "unique_class_id_1",
            "className": "10A",
            "createdAt": "2024-10-25T10:20:00.000Z",
            "updatedAt": "2024-10-25T10:20:00.000Z"
        },
        {
            "_id": "unique_class_id_2",
            "className": "10B",
            "createdAt": "2024-10-25T10:20:00.000Z",
            "updatedAt": "2024-10-25T10:20:00.000Z"
        }
    ]
    ```

#### Error Responses

1. **Status**: `500 Internal Server Error`
   - **Condition**: Unexpected server error or database issue.
   - **Response Body**:
     ```json
     {
         "message": "Error fetching classes",
         "error": "Internal Server Error"
     }
     ```

-----------------------------------------------------------------------------------------------


### 3rd API
## GET /classes/:classId

---

### Endpoint
- `GET /classes/:classId`

### Description
Fetches the details of a specific class by its ID.

### Request Parameters
- `classId` (path parameter): The unique identifier of the class.

### Request Headers
- None

### Responses

#### Success Response
- **Status**: `200 OK`
- **Description**: Successfully retrieved the class details.
- **Response Body**:
    ```json
    {
        "_id": "classId",
        "className": "Class Name",
        "createdAt": "Date",
        "updatedAt": "Date"
    }
    ```

#### Error Responses
- **Status**: `404 Not Found`
    - **Description**: The class with the specified ID was not found.
    - **Response Body**:
        ```json
        {
            "message": "Class not found"
        }
        ```

- **Status**: `500 Internal Server Error`
    - **Description**: Error fetching the class.
    - **Response Body**:
        ```json
        {
            "message": "Error fetching class",
            "error": "Error message"
        }
        ```
-----------------------------------------------------------------------------------------------



## POST /classes/:classId/subjects - Add a New Subject to a Specific Class

### Endpoint
- **URL:** `/classes/:classId/subjects`
- **Method:** `POST`
- **Description:** Adds a new subject to a specific class.

### Request Parameters
- **URL Parameter:**
  - `classId` (String): Specifies the class in which the subject will be added.

- **Request Body:**
  ```json
  {
    "subjectName": "Mathematics"
  }

# subjectName (String, Required): Name of the subject to be added to the class.

-**Success Response**
## Code: 201 Created

```json
{
  "message": "Subject added successfully",
  "subject": {
      "_id": "64e3d7f5567c8c58fb2a6a2a",
      "subjectName": "Mathematics",
      "classId": "64e3d7e4567c8c58fb2a6a19",
      "createdAt": "2024-10-25T08:37:09.451Z",
      "updatedAt": "2024-10-25T08:37:09.451Z"
  }
}
```
# Error Responses

# Code: 400 Bad Request
> Condition: If subjectName is missing or longer than 4 characters.

```json
{
  "message": "subjectName length should be between 1-4"
}

- **Code:** `404 Not Found`
  - **Condition:** If the provided `classId` does not match any existing class.
  - **Content:**
    ```json
    {
      "message": "Class not found"
    }
    ```
- **Code:** `500 Internal Server Error`
  - **Condition:** Agar server par koi unexpected error ho.
  - **Content:**
    ```json
    {
      "message": "Error adding subject",
      "error": "<error details>"
    }
    ```
```json
{
  "message": "Error adding subject",
  "error": "<error details>"
}
```
# Request Example

```http
POST /classes/64e3d7e4567c8c58fb2a6a19/subjects
Content-Type: application/json
```
```json
{
    "subjectName": "Mathematics"
}
```
## Response Example
```json
{
  "message": "Subject added successfully",
  "subject": {
      "_id": "64e3d7f5567c8c58fb2a6a2a",
      "subjectName": "Mathematics",
      "classId": "64e3d7e4567c8c58fb2a6a19",
      "createdAt": "2024-10-25T08:37:09.451Z",
      "updatedAt": "2024-10-25T08:37:09.451Z"
  }
}
```
----------------------------------------------------------------------------------------------------------------------



# Get All Subjects for a Specific Class
## Endpoint
`GET /classes/:classId/subjects`

### Description
Fetch all subjects for a specific class identified by `classId`. The response will contain an array of object subject names.

### URL Parameters
- `classId` (string, required): The ID of the class for which to fetch subjects.

### Responses

#### Success Response

**Code:** 200 OK  
**Content:**
```json
{
    "data": [
        {
            "subjectName": "computer science"
        },
        {
            "subjectName": "science"
        },
        {
            "subjectName": "maths"
        },
        {
            "subjectName": "social science"
        },
        {
            "subjectName": "assamese"
        },
        {
            "subjectName": "assamese m"
        }
    ]
}
```
----------------------------------------------------------------------------------------

# Attendance API 

1. Mark Attendance for a Class

`POST /classes/:classId/attendance`

This endpoint allows teachers to mark attendance for students in a specific class for a 

particular date. If attendance for that date is already marked, it cannot be marked again for the same day.

**Endpoint**
- URL: `/classes/:classId/attendance`
- Method: POST
- URL Parameter:
    - `:classId `(required): The unique identifier of the class.

## Request Body
- JSON Format:
```json
{
  "date": "YYYY-MM-DD",
  "attendance": [
    {
      "studentId": "student_id_1",
      "present": true
    },
    {
      "studentId": "student_id_2",
      "present": false
    }
  ]
}
```
- **date**: Date for which attendance is being marked (in YYYY-MM-DD format).
- **attendance**: An array of objects where each object includes:
    - **studentId**: The ID of the student.
    - **present**: Boolean value indicating if the student is present (true) or absent (false).

## Response

- Success Response:
    - `Status Code`: 201 Created
    - Body
```json
    {
  "message": "Attendance marked successfully",
  "attendance": [
    {
      "studentId": "student_id_1",
      "present": true
    },
    ...
  ]
}

```
- Error Response:
    - Status Code: `400 Bad Request`
    - Body

```json
    {
  "message": "Attendance for this date is already marked"
}
```
    - Status Code: `404 Not Found`
    - Body
```json
{
  "message": "Class not found."
}
```
# Example Request
```json
"http://localhost:3000/classes/671b498c576407f3a0bf5305/attendance"

{
  "date": "2023-10-26",
  "attendance": [
    { "studentId": "63fc25f9c654aa34e5bf3405", "present": true },
    { "studentId": "63fc25f9c654aa34e5bf3406", "present": false }
  ]
}'
```


---------------------------------------------------------------------------------------------------------------------



# Fetch Attendance Records for a Class

`GET /classes/:classId/attendance`

Fetch all attendance records for each student in the specified class.

## Endpoint

- URL: `/classes/:classId/attendance`
- Method: `GET`
- URL Parameter:
    -`:classId (required)`: The unique identifier of the class.

### Response
- Success Response:
    - Status Code:` 200 OK`
    - Body
```json
{
  "classId": "671b498c576407f3a0bf5305",
  "attendance": [
    {
      "studentId": "63fc25f9c654aa34e5bf3405",
      "name": "John Doe",
      "attendanceRecords": [
        {
          "date": "2023-10-24",
          "present": true
        },
        {
          "date": "2023-10-25",
          "present": false
        }
      ]
    },
    ...
  ]
}
```
- Error Response:
    - Status Code: `404 Not Found`
    - Body:
```json
{
  "message": "Class not found."
}
```
# Example Request

```json
 GET "http://localhost:3000/classes/671a0bf5305/attendance"

```

----------------------------------------------------------------------------------------


# Individual Student Attendance Record API

## 1. 1. View Attendance Record for a Specific Student

`GET /student/:classId/:studentId/attendance`

This endpoint allows users to fetch the complete attendance record for a specific student.


### Endpoint

- **URL**: `/students/:classId/:studentId/attendance`
- **Method**: `GET`
- **URL Parameters**:
  - `:classId` (required):  The unique identifier for the class.
  - `:studentId` (required): The unique identifier for the student.

#### Response

- **Success Response**:
  - **Status Code**: `200 OK`
  - **Body**:
    ```json
    {
      "studentId": "student_id",
      "name": "Student Name",
      "rollNumber":2,
      "attendance": [
        {
          "date": "2023-10-24",
          "present": true
  .      },
        ...
      ]
    }
    ```

- **Error Responses**:
  - **Status Code**: `404 Not Found`
  - **Body**:
    ```json
    {
      "message": "Class or student not found."
    }
    ```

  - **Status Code**: `500 Internal Server Error`
  - **Body**:
    ```json
    {
     "message": "Error while fetching attendance records.",
     "error": "Detailed error message"
    }
    ```
--------------------------------------------------------------------------------------



## Get All Students' Attendance for a Specific Class

### Endpoint
`GET /classes/:classId/attendance`

This endpoint allows an admin to retrieve attendance records for all students in a specific class.

#### URL Parameters
- `classId` (required): The unique identifier for the class.

#### Response

- **Success Response**:
  - **Status Code**: `200 OK`
  - **Body**:
    ```json
    {
      "classId": "class_id",
      "students": [
        {
          "studentId": "student_id",
          "name": "Student Name",
          "rollNumber": 101,
          "attendance": [
            {
              "date": "2023-10-01",
              "present": true
            },
            {
              "date": "2023-10-02",
              "present": false
            }
            // More records...
          ]
        },
        // More students...
      ]
    }
    ```

- **Error Responses**:
  - **404 Not Found**
    - **Body**:
      ```json
      {
        "message": "Class not found."
      }
      ```

  - **500 Internal Server Error**
    - **Body**:
      ```json
      {
        "message": "Error fetching attendance records.",
        "error": "Detailed error message"
      }
      ```

#### Example Request
```bash
curl -X GET "http://localhost:3000/classes/676407f3a0bf5305/attendance"













