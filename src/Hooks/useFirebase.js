import { GoogleAuthProvider,GithubAuthProvider,signInWithPopup,getAuth } from "firebase/auth";
import { useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase();
// Necessary variables
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
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


    // Sign in with Github
    const signInWithGithub = () =>
    {
        signInWithPopup(auth, githubProvider)
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
        signInWithGithub,
        formAction,
        user,
        error
    }
}


// export main function
export default useFirebase;