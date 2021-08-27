import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
  authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
  projectId: "disneyplus-clone-a33d5",
  storageBucket: "disneyplus-clone-a33d5.appspot.com",
  messagingSenderId: "37918794208",
  appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
  measurementId: "G-DRVLJKWRWG",

  // apiKey: "AIzaSyAEfAGoRaX90LgP8HR2XEVpr1EmEoMNyQ8",
  // authDomain: "disney-clone-e7edd.firebaseapp.com",
  // projectId: "disney-clone-e7edd",
  // storageBucket: "disney-clone-e7edd.appspot.com",
  // messagingSenderId: "722402404683",
  // appId: "1:722402404683:web:664287fa262824b4d2e0ce",
  // measurementId: "G-J4PEYCG9FJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
