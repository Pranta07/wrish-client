import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";

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
                // ...
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    };

    const handleSignIn = (email, password) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((Result) => {
                // Signed in
                const user = Result.user;
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
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    };

    // observer of changing of auth sate
    useEffect(() => {
        setLoading(true);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setLoading(false);
        });
    }, []);

    return {
        handleRegister,
        handleSignIn,
        handleSignOut,
        user,
        loading,
        error,
    };
};

export default useFirebase;
