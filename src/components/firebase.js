
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBD80gBFCisCnD8zYDdqGba2v8Xl6_joBk",
    authDomain: "apptest-237809.firebaseapp.com",
    databaseURL: "https://apptest-237809.firebaseio.com",
    projectId: "apptest-237809",
    storageBucket: "apptest-237809.appspot.com",
    messagingSenderId: "267530377840",
    appId: "1:267530377840:web:4b18a6fd3c89e7bd11b2b5"
}).auth();
