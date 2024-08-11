// import { initializeApp } from "firebase/app";
// import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
// import { addDoc, getFirestore, collection } from "firebase/firestore";
// import { toast } from "react-toastify";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };

// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
// const db = getFirestore(app);

// const signup = async (name, email, password) => {
//   try {
//     const response = await createUserWithEmailAndPassword(auth, email, password);
//     const user = response.user;
//     await addDoc(collection(db, "user"), {
//       uid: user.uid,
//       name,
//       authProvider: "local",
//       email,
//     });
//     toast.success('Account Created');
//   } catch (error) {
//     console.log(error);
//     toast.error(error.code.split('/')[1].split('-').join(" "));
//   }
// };

// const login = async (email, password) => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password);
//     toast.success('Login Successful');
//   } catch (error) {
//     console.log(error);
//     toast.error(error.code.split('/')[1].split('-').join(" "));
//   }
// };

// const logout = async () => {
//   try {
//     await signOut(auth);
//     toast.success('Logged Out Successfully');
//   } catch (error) {
//     console.error(error);
//     toast.error(error.code.split('/')[1].split('-').join(" "));
//   }
// };

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     console.log("User signed in:", user);
//   } else {
//     console.log("User signed out");
//   }
// });

// export { auth, db, login, signup, logout, onAuthStateChanged };
