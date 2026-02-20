// Firebase Config (Compat version)

const firebaseConfig = {
  apiKey: "AIzaSyDX5tR2JF6wZYoKfxmZY4fMMUh1YZSponQ",
  authDomain: "mizpahfoundations-70c90.firebaseapp.com",
  projectId: "mizpahfoundations-70c90",
  storageBucket: "mizpahfoundations-70c90.appspot.com",
  messagingSenderId: "1066452149935",
  appId: "1:1066452149935:web:73d0b2e0370066d78e565a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Make globally available
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();