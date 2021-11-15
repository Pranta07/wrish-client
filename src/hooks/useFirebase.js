import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import firebaseAppInitialize from "../Pages/Login/Firebase/firebase.init";

firebaseAppInitialize();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const auth = getAuth();
    const handleRegister = (name, email, password, history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((Result) => {
                // Signed in
                // const user = Result.user;
                setUser({ displayName: name, email: email });
                handleUpdate(name);
                setError("");
                Swal.fire("Good job!", "Registered Successfully!", "success");
                history.push("/");
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    };

    const handleSignIn = (email, password, location, history) => {
        setLoading(true);
        console.log(email, password);
        signInWithEmailAndPassword(auth, email, password)
            .then((Result) => {
                // Signed in
                setError("");
                Swal.fire("Good job!", "Login Successfully!", "success");
                history.push(location?.state?.from || "/");
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    };

    const handleGoogleSignIn = (location, history) => {
        setLoading(true);

        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // const user = result.user;
                setError("");
                history.push(location?.state?.from);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    };

    const handleSignOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    };

    const handleUpdate = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name,
        })
            .then(() => {
                // Profile updated!
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    // observer of changing of auth sate
    useEffect(() => {
        setLoading(true);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    return {
        handleRegister,
        handleSignIn,
        handleGoogleSignIn,
        handleSignOut,
        user,
        loading,
        error,
        setError,
    };
};

export default useFirebase;
