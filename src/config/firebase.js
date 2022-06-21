import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Configure Firebase.
const config = {
    apiKey: "AIzaSyBoB8yqJ3npYpAQ8dDTtBgAbPceM4iEZzY",
    authDomain: "e-learning-mern.firebaseapp.com",
  // ...
};

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl: "/",
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

const app = firebase.initializeApp(config);

export { config, uiConfig, app };