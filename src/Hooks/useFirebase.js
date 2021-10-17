import { GoogleAuthProvider,signInWithPopup,getAuth } from "firebase/auth";
import { useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase();
// Necessary variables
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();



const useFirebase = () =>
{

    // Disable form reloading
    const formAction = (e) =>
    {
        e.preventDefault();
    }


    // All State
    const [user, setUser] = useState({});
    const [error, setError] = useState('');



    // Sign in with google
    const signInWithGoogle = () =>
    {
        signInWithPopup(auth, googleProvider)
            .then(result =>
            {
                setUser(result.user);
            }).catch(error =>
            {
                setError(error.code);
            })
    }



    // Export others function
    return {
        signInWithGoogle,
        formAction,
        user,
        error
    }
}


// export main function
export default useFirebase;