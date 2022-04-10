import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../firebase.init";


const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const useFirebase =() => {
    const [user, setUser] = useState({});
    useEffect(()=>{

    } ,[])

    useEffect(()=>{
        onAuthStateChanged(auth,user=> {
            setUser(user)
        })
    },[])

    const signInWithGoogle = () => {
        signInWithPopup(auth,googleProvider)
        .then(result => {
            // console.log(result.user);
            setUser(result.user)
        })
        .catch(err => console.log(err.message))
    }
    const hanldeSignOut = () =>{
        signOut(auth).then(()=>{})
    }

    return {user,signInWithGoogle,hanldeSignOut};
}

export default useFirebase;