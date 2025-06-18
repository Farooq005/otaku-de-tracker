// firebase.js
// Initialize Firebase and Firestore

// Import the Firebase modules (via <script> tag, not npm here)
const firebaseConfig = {
  apiKey: "AIzaSyAqFvjlEw4sefcjqyf6_xjSoNUI6fBvR7I",
  authDomain: "otaku-de-tracker.firebaseapp.com",
  projectId: "otaku-de-tracker",
  storageBucket: "otaku-de-tracker.appspot.com",
  messagingSenderId: "333150965990",
  appId: "1:333150965990:web:4707117f0f0e534c61eb27"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

// Google Auth
const provider = new firebase.auth.GoogleAuthProvider();

