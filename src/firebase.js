import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDeaeanoyu_ofoL2kgDiuQFSxtAwLLyBgQ",
  authDomain: "disney-plus-15b02.firebaseapp.com",
  projectId: "disney-plus-15b02",
  storageBucket: "disney-plus-15b02.appspot.com",
  messagingSenderId: "1035710174574",
  appId: "1:1035710174574:web:3d4ad1dbc60a4d10d95d7f",
  measurementId: "G-Q7W5GLEQVV",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
// export multiple file so we use curly bracket{}
export default db;
