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
                Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: "Registered Successfully!",
                    showConfirmButton: false,
                    timer: 2000,
                });
                setUser({ displayName: name, email: email });
                saveUser(name, email); //save user info to db
                handleUpdate(name);
                setError("");
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
                Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: "Successfully Logged in!",
                    showConfirmButton: false,
                    timer: 2000,
                });
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

    const handleSignOut = (history) => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                setError("");
                history.push("/");
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

    const saveUser = (name, email) => {
        const userData = { name, email };
        fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userData),
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
