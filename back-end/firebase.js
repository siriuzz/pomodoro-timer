const { initializeApp } = require('firebase/app');
const firebaseAuth = require('firebase/auth');


class FirebaseSingleton {
  constructor() {
    if (!FirebaseSingleton.instance) {
      // Initialize Firebase
      this.firebaseApp = initializeApp({
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        projectId: process.env.PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDER_ID,
        appId: process.env.APP_ID,
      });
      FirebaseSingleton.instance = this;
    }

    return FirebaseSingleton.instance;
  }

  getFirebaseApp() {
    return this.firebaseApp;
  }
  getFirebaseAuth(){
    return firebaseAuth.initializeAuth(this.getFirebaseApp());
  }
}

// Export a singleton instance
module.exports = new FirebaseSingleton();