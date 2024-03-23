import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCUSMh4LTSNi62RwJ2B2OxehMDI0ptNaWU",
  authDomain: "netflix-clone-00118.firebaseapp.com",
  projectId: "netflix-clone-00118",
  storageBucket: "netflix-clone-00118.appspot.com",
  messagingSenderId: "508915019363",
  appId: "1:508915019363:web:dc5938e107519c5a191256",
  measurementId: "G-FHEZJTY23J"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);