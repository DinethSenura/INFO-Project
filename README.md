# MERN PDF Viewer

## Description

A simple MERN stack application that allows users to upload PDF files and view them. The application includes user authentication, logging, and secure data handling.

## Features

- User Authentication (Sign up, Login, Logout)
- PDF Upload and View
- Logging of API requests
- Data Tracing and Security

## Technologies

- MongoDB
- Express.js
- React.js
- Node.js

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/mern-pdf-viewer.git
    cd mern-pdf-viewer
    ```

2. Install backend dependencies:
    ```bash
    cd backend
    npm install
    ```

3. Configure environment variables in `.env`:
    ```
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. Start the backend server:
    ```bash
    npm start
    ```

5. Install frontend dependencies:
    ```bash
    cd ../frontend
    npm install
    ```

6. Start the frontend server:
    ```bash
    npm start
    ```

## Usage

- Register a new account.
- Login with your account.
- Upload PDF files from the home page.
- View the uploaded PDFs.

## License

This project is licensed under the MIT License.
