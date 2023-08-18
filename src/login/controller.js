require("dotenv").config();
const pool = require("../../database");
const queries = require("./queries");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Login
const login = (req, res) => {
 const username = req.body.username;
 const password = req.body.password;
 const secret = process.env.secret;

 pool.query(queries.login, [username], (error, results) => {
  if (error) res.send({ error: error });

  if (results.length > 0) {
   bcrypt.compare(password, results[0].password, (error, response) => {
    if (response) {
     const id = results[0].id;
     const token = jwt.sign({ id }, secret, {
      expiresIn: 300,
     });

     req.session.user = results;

     res.json({ auth: true, token: token, results: results });
    } else {
     res.json({ auth: false, message: "Wrong username/password combination!" });
    }
   });
  } else {
   res.json({ auth: false, message: "no user exist in our system" });
  }
 });
};

// Exporting modules
module.exports = {
 login,
};
