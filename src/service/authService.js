import {signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {auth, signOutFirebase,} from "./firebase/firebaseService";

const provider = new GoogleAuthProvider();

export const googleSignUp = async () => {
    const {refreshToken} = (await signInWithPopup(auth, provider)).user.stsTokenManager;
    return refreshToken
}

export const signOut =  async () => {
    return await signOutFirebase();
}

//     .then((result) => {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;
//         // The signed-in user info.
//         const user = result.user;
//         // ...
//     }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
// });