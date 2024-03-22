const express = require('express')
const router = express.Router();
// const firestore = require('firebase/firestore');
const firebaseAuth = require('firebase/auth');
const firebaseSingleton = require('../firebase');

router.get('/', (req, res) => {
    // Handle GET request for products
    res.send('GET /products');
});

router.post('/', (req, res) => {
    // Handle POST request for products
    res.send('POST /products');

    // firebaseAuth.signInWithEmailAndPassword();
});

router.post('/sign-in', (req,res)=>{
    console.log(req.body);
    firebaseAuth.createUserWithEmailAndPassword(firebaseSingleton.getFirebaseAuth(),email=req.body['email'],password=req.body['password']);
    // firebaseAuth.createUserWithEmailAndPassword();
    res.send('success');
})

module.exports = router;