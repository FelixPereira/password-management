import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyDG45h_lzLGSl23bvjY1oeSTzJFtwWmoTo",
  authDomain: "passwordmanagement-d8967.firebaseapp.com",
  projectId: "passwordmanagement-d8967",
  storageBucket: "passwordmanagement-d8967.appspot.com",
  messagingSenderId: "294068809545",
  appId: "1:294068809545:web:fb635d349f6c46c8e03498"
};

firebase.initializeApp(config);


export const auth = firebase.auth();


export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
  .then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  })
}

export {firebase}; 