import * as firebase from 'firebase';
import { FirebaseConfig } from '@/config/keys.js';

firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const postsRef = databaseRef.child('posts');
export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
