const express = require("express");
const router = express.Router();
// const firestore = require('firebase/firestore');
const firebaseAuth = require("firebase/auth");
const { getFirebaseAuth } = require("../firebase");

router.get('/',(req,res)=>{
    return 'success';
})

module.exports = router;