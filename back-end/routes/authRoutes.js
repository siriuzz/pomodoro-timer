const express = require("express");
const router = express.Router();
// const firestore = require('firebase/firestore');
const firebaseAuth = require("firebase/auth");
const { getFirebaseAuth } = require("../firebase");

router.get("/", (req, res) => {
  // Handle GET request for products
  res.send("GET /products");
});

router.post("/", (req, res) => {
  // Handle POST request for products
  res.send("POST /products");

  // firebaseAuth.signInWithEmailAndPassword();
});

router.post("/sign-in", async (req, res) => {
  console.log(req.body);
  const {name,email, password} = req.body;
  try {
      await firebaseAuth.createUserWithEmailAndPassword(
        getFirebaseAuth(),
        (email = email),
        (password = password)
      );
    
  } catch (error) {
    res.send('Something went wrong').status(500);
  }
  req.session.save();
  // firebaseAuth.createUserWithEmailAndPassword();
  res.send("success");
});

router.post("/log-in", async (req, res) => {
  console.log(req.body);
  const {email, password} = req.body;

  await firebaseAuth.signInWithEmailAndPassword(getFirebaseAuth(), email, password);
  res.send("success");
});

module.exports = router;
