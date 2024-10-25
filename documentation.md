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



