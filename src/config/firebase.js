import * as firebase from 'firebase';
import { FirebaseConfig } from '@/config/keys.js';

firebase.initializeApp(FirebaseConfig);

// const databaseRef = firebase.database().ref();
export const postsRef = firebase
    .database()
    .ref()
    .child('posts');
