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
import firebaseAppInitialize from "../Pages/Login/Firebase/firebase.init";

firebaseAppInitialize();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const auth = getAuth();
    const handleRegister = (name, email, password) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((Result) => {
                // Signed in
                const user = Result.user;
                setUser({ name, email });
                handleUpdate(name);
                setError("");
                // ...
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    };

    const handleSignIn = (email, password, location, history) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((Result) => {
                // Signed in
                const user = Result.user;
                setError("");
                history.replace(location.state.from);
                // ...
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    };

    const handleGoogleSignIn = () => {
        setLoading(true);

        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setError("");
                // ...
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
                // ...
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
