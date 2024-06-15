import admin from 'firebase-admin';
import { credential } from 'firebase-admin';
import { environment } from './src/environments/environment';

const serviceAccount = require('./src/assets/firebase/game-e6fea-firebase-adminsdk-gynmp-1d08c316a2.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: environment.firebaseConfig.databaseURL
});

export default admin;