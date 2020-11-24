import firebase from "firebase";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBOPLifrmJBJGANtiho0s5qrF5ErO7G9qQ",
  authDomain: "cl-62273.firebaseapp.com",
  databaseURL: "https://cl-62273.firebaseio.com",
  projectId: "cl-62273",
  storageBucket: "cl-62273.appspot.com",
  messagingSenderId: "803078676742",
  appId: "1:803078676742:web:91adf5a4c155359341be87",
  measurementId: "G-S5NETYPD5L",
});

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
