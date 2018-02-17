import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAdpSe-BlkhKK79osGLmPzij_U93F-xsJY',
  authDomain: 'todo-96279.firebaseapp.com',
  databaseURL: 'https://todo-96279.firebaseio.com',
  projectId: 'todo-96279',
  storageBucket: 'todo-96279.appspot.com',
  messagingSenderId: '26549409527'
};

const app = firebase.initializeApp(config);

export const db = app.database();