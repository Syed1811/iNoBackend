# iNoteBook Backend

Welcome to the iNoteBook backend repository. This Node.js and Express.js backend serves as the server for the iNoteBook application, handling authentication, note storage, and more.

## Technologies Used

- **Node.js:** A JavaScript runtime built on the V8 JavaScript engine that allows server-side execution of JavaScript code.

- **Express.js:** A web application framework for Node.js that simplifies the process of building robust and scalable web applications and APIs.

- **MongoDB:** A NoSQL database used for storing and managing notes. MongoDB is known for its flexibility and scalability, making it an excellent choice for applications with varying data structures.

- **bcryptjs:** A library for hashing passwords securely. iNoteBook uses bcryptjs to store user passwords securely by converting them into irreversible hash values.

- **cors:** Cross-Origin Resource Sharing middleware that enables secure communication between the frontend and backend, allowing the frontend to make requests to the backend from a different origin.

- **dotenv:** A zero-dependency module used to load environment variables from a .env file into the process environment. iNoteBook utilizes dotenv to manage sensitive information such as port numbers and database URLs.

- **express-validator:** Middleware for Express.js that provides validation and sanitization of request data. It helps ensure that the data received by the backend is accurate and secure.

- **jsonwebtoken:** A library for implementing JSON Web Tokens (JWT) for user authentication. iNoteBook uses JWTs to secure user access and verify the authenticity of requests.

## Endpoints

- **Authentication:**
  - `POST /api/auth/register`: Register a new user.
  - `POST /api/auth/login`: Authenticate and log in a user.

- **Notes:**
  - `GET /api/notes`: Get all notes for a user.
  - `POST /api/notes`: Add a new note.
  - `PUT /api/notes/:id`: Update a note.
  - `DELETE /api/notes/:id`: Delete a note.

## About iNoteBook Backend

The iNoteBook backend is built with Node.js and Express.js, providing a secure and efficient server for the iNoteBook frontend. It uses MongoDB for data storage and various middleware for authentication, validation, and more.

Feel free to explore the code and contribute to the development of iNoteBook!

---

Thank you for using iNoteBook! If you have any questions or feedback, feel free to reach out.
