import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyA_xdkm5qxAY52sO-YM27ZRnjFKVqOYRvM",
    authDomain: "crwn-db-eae9a.firebaseapp.com",
    projectId: "crwn-db-eae9a",
    storageBucket: "crwn-db-eae9a.appspot.com",
    messagingSenderId: "346784112952",
    appId: "1:346784112952:web:10b79b00fda776aaeae1cd",
    measurementId: "G-Z0GV3ZZH72"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 