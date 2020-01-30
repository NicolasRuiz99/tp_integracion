import * as firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyAfyS9W_hcYzEatwNC2LFjNqbc7j1ms-OU",
    authDomain: "tp-integracion.firebaseapp.com",
    databaseURL: "https://tp-integracion.firebaseio.com",
    projectId: "tp-integracion",
    storageBucket: "tp-integracion.appspot.com",
    messagingSenderId: "283039848838",
    appId: "1:283039848838:web:eabfdd11652d3b3b6a3407",
    measurementId: "G-TX17M2TPFY"
  };

firebase.initializeApp(firebaseConfig);

const googleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
    .then (res=>{
        return res.additionalUserInfo.profile.id;
    })
    .catch (err =>{
        throw err;
    })
    ;
}

const facebookLogin = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider)
    .then (res=>{
        return res.additionalUserInfo.profile.id;
    })
    .catch (err =>{
        throw err;
    })
    ;
}

export {
    googleLogin,
    facebookLogin
}