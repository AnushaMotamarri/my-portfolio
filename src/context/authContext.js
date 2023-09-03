// import {useContext, createContext} from 'react';
// // import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
// import { auth } from '../firebase/config';
// import firebase from 'firebase/app';

// const AuthContext = createContext();
// export const AuthContextProvider = ({children})=>{
//     const googleSignIn = ()=>{
//         var provider = new firebase.auth.GoogleAuthProvider();

//        auth.signInWithPopup(auth,provider)
//     }
//     return <AuthContext.Provider value={{googleSignIn}}>
//         {children}
//     </AuthContext.Provider>
// }
// export const  UserAuth = ()=>{
//     return useContext(AuthContext)
// } 