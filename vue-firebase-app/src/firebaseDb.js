import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCZ5KHiGkevOE2N8Qr2vFZVKFSsaIRE8U0",
    authDomain: "test-vue-firebase-591c1.firebaseapp.com",
    projectId: "test-vue-firebase-591c1",
    storageBucket: "test-vue-firebase-591c1.appspot.com",
    messagingSenderId: "426671459746",
    appId: "1:426671459746:web:6666283973ed19e2b8b6fb",
    measurementId: "G-440QYW7GXD"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();