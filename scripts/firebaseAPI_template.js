//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyAW42NGyBvzbvU4csTrSR3bRxVugZW8XtA",
    authDomain: "comp1800-202230demo.firebaseapp.com",
    projectId: "comp1800-202230demo",
    storageBucket: "comp1800-202230demo.appspot.com",
    messagingSenderId: "28681458570",
    appId: "1:28681458570:web:358aaaf3f1dfd696072e73"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();