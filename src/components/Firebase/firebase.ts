import { config } from './firebaseConfig'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

firebase.initializeApp(config)
const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});

export const usersRef = db.collection("users");
