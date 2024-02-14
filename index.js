// index.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectToMongo = require("./db");
const path = require("path");
const app = express();

dotenv.config({ path: "./.env" });

// Use process.env.PORT or default to 5000 if not defined
const port = process.env.PORT || 5000;

console.log("Port:", port);

connectToMongo()
  .then(() => {
    app.use(cors({ origin: "https://main--inooteboook.netlify.app/" }));
    app.use(express.json());
    app.use(express.static(path.join(__dirname, "../build")));

    app.use("/api/auth", require("./routes/auth"));
    app.use("/api/notes", require("./routes/notes"));

    app.use("*", function (req, res) {
      res.sendFile(path.join(__dirname + "../build/index.html"));
    });

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
