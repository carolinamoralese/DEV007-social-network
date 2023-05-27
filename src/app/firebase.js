// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();

export function autenticaGoogle() {
  const auth = getAuth();
result = signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user)

    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    console.log(error)
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

  console.log(result)

  return result;

}



///https://firebase.google.com/docs/auth/web/google-signin?hl=es
// se hizo el paso 1 y paso 5
