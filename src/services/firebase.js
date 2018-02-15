import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAAxJsBRNcsYc06wKv8xKbPVEZkjNMqPXI',
  authDomain: 'laughlist-8c8b5.firebaseapp.com',
  databaseURL: 'https://laughlist-8c8b5.firebaseio.com',
  projectId: 'laughlist-8c8b5',
  storageBucket: 'laughlist-8c8b5.appspot.com',
  messagingSenderId: '471956397580'
};

const app = firebase.initializeApp(config);
export const db = app.database();
