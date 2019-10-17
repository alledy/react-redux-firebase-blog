import * as firebase from 'firebase';
import { FirebaseConfig } from '@/config/keys.js';

firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const postsRef = databaseRef.child('posts');
export const authRef = firebase.auth();

export const google_provider = new firebase.auth.GoogleAuthProvider();
export const facebook_provider = new firebase.auth.FacebookAuthProvider();

export const actionCodeSettings = {
    url: 'http://localhost:1234/login',
    handleCodeInApp: true,
    // When multiple custom dynamic link domains are defined, specify which
    // one to use.
    // dynamicLinkDomain: 'example.page.link',
};
