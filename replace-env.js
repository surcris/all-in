const fs = require('fs');
const path = require('path');

const targetPath = './src/environments/environment.ts';
const targetProdPath = './src/environments/environment.prod.ts';

const firebaseConfig = `
  firebaseConfig: {
    apiKey: '${process.env.FIREBASE_API_KEY}',
    authDomain: '${process.env.FIREBASE_AUTH_DOMAIN}',
    databaseURL: '${process.env.FIREBASE_DATABASE_URL}',
    projectId: '${process.env.FIREBASE_PROJECT_ID}',
    storageBucket: '${process.env.FIREBASE_STORAGE_BUCKET}',
    messagingSenderId: '${process.env.FIREBASE_MESSAGING_SENDER_ID}',
    appId: '${process.env.FIREBASE_APP_ID}',
    measurementId: '${process.env.FIREBASE_MEASUREMENT_ID}'
  }
`;

const envProdConfigFile  = `export const environment = {
  production: ${process.env.NODE_ENV === 'production'},
  apiUrl: '${process.env.API_URL}',
  akey: '${process.env.AKEY}',
  ${firebaseConfig}
};
`;

const envConfigFile = `export const environment = {
  production: ${process.env.NODE_ENV === 'production'},
  apiUrl: '${process.env.API_URL}',
  akey: '${process.env.AKEY}',
  ${firebaseConfig}
};
`;

fs.writeFile(targetProdPath, envProdConfigFile, 'utf8', (err) => {
    if (err) {
      console.log('Error writing environment file', err);
    } else {
      console.log('Environment file written successfully');
    }
  });

  fs.writeFile(targetPath, envConfigFile, 'utf8', (err) => {
    if (err) {
      console.log('Error writing environment file', err);
    } else {
      console.log('Environment file written successfully');
    }
  });