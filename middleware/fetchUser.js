var jwt = require("jsonwebtoken");
JWT_SECRET = "none";

const fetchuser = (req, res, next) => {
  //git user form jwt token

  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please useing valid token" });
  }
  try {
    const string = jwt.verify(token, JWT_SECRET);
    req.user = string.user;
    next();
  } catch (err) {
    res.status(401).send({ error: "Please useing valid token" });
  }
};

module.exports = fetchuser;
