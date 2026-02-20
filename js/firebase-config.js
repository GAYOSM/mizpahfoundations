// js/firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDX5tR2JF6wZYoKfxmZY4fMMUh1YZSponQ",
  authDomain: "mizpahfoundations-70c90.firebaseapp.com",
  projectId: "mizpahfoundations-70c90",
  storageBucket: "mizpahfoundations-70c90.firebasestorage.app",
  messagingSenderId: "1066452149935",
  appId: "1:1066452149935:web:73d0b2e0370066d78e565a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);