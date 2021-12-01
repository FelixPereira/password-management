import firebase from 'firebase/app';

const config = {
  apiKey: "AIzaSyDG45h_lzLGSl23bvjY1oeSTzJFtwWmoTo",
  authDomain: "passwordmanagement-d8967.firebaseapp.com",
  projectId: "passwordmanagement-d8967",
  storageBucket: "passwordmanagement-d8967.appspot.com",
  messagingSenderId: "294068809545",
  appId: "1:294068809545:web:fb635d349f6c46c8e03498"
}

firebase.initializeApp(config)

export const auth = firebase.auth();

const provider = firebase.auth.GoogleAuthProvider();

export const signinWithGoogle = () => {
  auth.signinWithPopup(provider)
}

export default firebase;