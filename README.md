# Book Management Web Application

This web application allows users to manage book details, including adding, editing, updating, and deleting book information. The application uses MongoDB for the database, React for the frontend, and Tailwind CSS for styling.

## Features

- Add new book details
- Edit existing book details
- Update book information
- Delete books from the list
- User-friendly interface

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Setup Instructions

### Prerequisites

- Node.js installed
- MongoDB installed and running

### Frontend Setup

1. Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the frontend server:
    ```bash
    npm start
    ```

### Backend Setup

1. Navigate to the `backend` directory:
    ```bash
    cd backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Configure the database connection:
    - Open the `config.js` file located in the `backend` directory.
    - Update the configuration to the following:
      ```javascript
      module.exports = {
        mongoURI: 'mongodb://root:root@localhost:27017/Books-Store-MERN',
        secretOrKey: 'secret'
      };
      ```

4. Start the backend server:
    ```bash
    npm start
    ```

### MongoDB Setup

1. Make sure MongoDB is running.
2. Create a new database named `Books-Store-MERN`.
3. Use the username `root` and password `root` for the database connection.

### Running the Application

1. Ensure both the frontend and backend servers are running.
2. Open your browser and navigate to `http://localhost:5173`.

## Usage

- To add a new book, click on the "Add Book" button and fill in the required details.
- To edit a book, click on the "Edit" button next to the book you wish to edit.
- To delete a book, click on the "Delete" button next to the book you wish to delete.

## Notes

- The database needs to be created every time the application is set up.
- Ensure that the `config.js` file in the backend is properly configured with the correct database credentials.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For any issues or questions, please contact [Suruchi Wagh] at [suruchiwagh1234@gmail.com].

