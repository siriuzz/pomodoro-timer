const express = require("express");
const session = require('express-session');
const server = express();
const port = 3000;
// const router = express.Router();
const authRoutes = require("./routes/authRoutes");
const timerRoutes = require("./routes/timerRoutes");
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

server.use(cors());
// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: 'secret_key', // Change this to a secure random string in production
  resave: false,
  saveUninitialized: true
}));

function requireLogin(req, res, next) {
  if (req.session && req.session.user) {
      // User is logged in, proceed to the next middleware/route handler
      next();
  } else {
      // User is not logged in, redirect to login page or send an error response
      res.status(401).send('Unauthorized');
  }
}

server.use("/auth", authRoutes);
server.use("/timer",requireLogin,  timerRoutes);

// server.get('/', (req, res) => {
//   res.send('Hola mundo!')
// })

server.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});


