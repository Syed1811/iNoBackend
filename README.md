# iNoteBook Backend

Welcome to the iNoteBook backend repository. This Node.js and Express.js backend serves as the server for the iNoteBook application, handling authentication, note storage, and more.

## Technologies Used

- **Node.js:** Server-side JavaScript runtime.
- **Express.js:** Web application framework for Node.js.
- **MongoDB:** Database for storing notes.
- **bcryptjs:** Password hashing for user authentication.
- **cors:** Middleware for enabling Cross-Origin Resource Sharing.
- **dotenv:** Environment variable management.
- **express-validator:** Middleware for input validation.
- **jsonwebtoken:** Token-based authentication for secure access.


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
