import React,{useState} from 'react'
import {firebase} from '../firebase/config'
function SignIn() {
    const [userName,setUserName] = useState(null)
    function signInWithFirebase(){
        var google_provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(google_provider).then((res)=>{
            let nameDoc = res?.additionalUserInfo?.profile;
            setUserName(nameDoc.name)
        }).catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div onClick={signInWithFirebase}>
             {userName?'Hi, '+userName:'Sign In'}
        </div>
    )
}

export default SignIn
