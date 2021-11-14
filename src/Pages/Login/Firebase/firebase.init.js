import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseAppInitialize = () => {
    initializeApp(firebaseConfig);
};
export default firebaseAppInitialize;
