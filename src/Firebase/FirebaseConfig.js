import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA41f1vvrLlDqHSEp42uxYfYoqJV7hWhbc",
  authDomain: "nestquesthomes-e3965.firebaseapp.com",
  projectId: "nestquesthomes-e3965",
  storageBucket: "nestquesthomes-e3965.appspot.com",
  messagingSenderId: "87345918616",
  appId: "1:87345918616:web:de3569d0815fcb3f8616ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;