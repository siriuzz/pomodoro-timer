// firebaseSingleton.js
const firestore = require('firebase/firestore');
const { initializeApp } = require('firebase/app');
const firebaseAuth = require('firebase/auth');



class FirebaseSingleton {
  constructor() {
    if (!FirebaseSingleton.instance) {
      // Initialize Firebase
      this.firebaseApp = initializeApp({
        apiKey: "AIzaSyArsZwe582-JX-2hYmpyojjtYd3QjbFViM",
        authDomain: "pomodory-febf2.firebaseapp.com",
        projectId: "pomodory-febf2",
        storageBucket: "pomodory-febf2.appspot.com",
        messagingSenderId: "670351629469",
        appId: "1:670351629469:web:a2033f61d4885ca2a2c874",
      });
      FirebaseSingleton.instance = this;
    }

    return FirebaseSingleton.instance;
  }

  firebaseSingletonAuth;

  getFirebaseApp() {
    return this.firebaseApp;
  }
  getFirebaseAuth(){
    return firebaseAuth.initializeAuth(this.firebaseApp);
  };
  getFirestore(){
    return firestore.initializeFirestore(this.firebaseApp);
  }
}

// Export a singleton instance
module.exports = new FirebaseSingleton();
