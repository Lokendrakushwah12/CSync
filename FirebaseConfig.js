// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics , isSupported as isAnalyticsSupported } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMn6Y2h5dJir_L0YfO3xnpdzwE9mYjEus",
  authDomain: "nexus-e61fe.firebaseapp.com",
  projectId: "nexus-e61fe",
  storageBucket: "nexus-e61fe.appspot.com",
  messagingSenderId: "902330450116",
  appId: "1:902330450116:web:ad8c679e31ae6ffbe54991",
  measurementId: "G-009R3DVW1E"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
// const analytics = getAnalytics(app);

export { db, storage, app };
export default firebaseConfig;
