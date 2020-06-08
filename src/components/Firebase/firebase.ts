import { config } from './firebaseConfig'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

firebase.initializeApp(config)
export default firebase;

