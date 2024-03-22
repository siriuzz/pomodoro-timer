const express = require("express");
const server = express();
const port = 3000;
// const router = express.Router();
const authRoutes = require("./routes/authRoutes");
const cors = require('cors');
const bodyParser = require('body-parser');

server.use(cors());
// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {

// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

server.use("/auth", authRoutes);
// server.get('/', (req, res) => {
//   res.send('Hola mundo!')
// })

server.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});


