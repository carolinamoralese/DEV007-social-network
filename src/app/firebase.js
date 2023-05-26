
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBJIVQJUZhd6qepXTzTYDouzHUYqp32qXY",
    authDomain: "mountainme-a55a7.firebaseapp.com",
    projectId: "mountainme-a55a7",
    storageBucket: "mountainme-a55a7.appspot.com",
    messagingSenderId: "854126143691",
    appId: "1:854126143691:web:cccb26de4c85d8151b934e",
    measurementId: "G-QEFDFP4RZ8"
  };

  // Initialize Firebase
   export const app = initializeApp(firebaseConfig);
   console.log(app);
  const analytics = getAnalytics(app);
