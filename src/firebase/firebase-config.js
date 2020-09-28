import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAUX1JZtoPyW2LjwJU9T0tk3x6tejAL7dU",
    authDomain: "phrasly-app.firebaseapp.com",
    databaseURL: "https://phrasly-app.firebaseio.com",
    projectId: "phrasly-app",
    storageBucket: "phrasly-app.appspot.com",
    messagingSenderId: "980844699595",
    appId: "1:980844699595:web:40eddf6f931c16b7e0e04e",
    measurementId: "G-Y8F69W52QR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAppProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAppProvider,
    firebase
}