import React from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAJVfOd4rXlAQ_VlsY8TAGVAwJDCru4ZTI',
    authDomain: 'jitt-c21e3.firebaseapp.com',
    projectId: 'jitt-c21e3',
    storageBucket: 'jitt-c21e3.appspot.com',
    messagingSenderId: '856418460503',
    appId: '1:856418460503:web:7de3f83ee518be4df25412',
    measurementId: 'G-7R1H0E925E',
};

export const app = firebase.initializeApp(firebaseConfig);

export const FirebaseContext = React.createContext({
    app,
    auth: app.auth(),
    firestore: app.firestore(),
    messaging: app.messaging(),
    storage: app.storage()
});