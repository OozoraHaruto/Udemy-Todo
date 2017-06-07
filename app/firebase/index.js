import firebase from 'firebase';

try{
  var config = {
    apiKey: "AIzaSyDFXNSvf5EGG3_5HvfU7MkcRZZIc8Hf9XQ",
    authDomain: "udemy-todo-app-5ab67.firebaseapp.com",
    databaseURL: "https://udemy-todo-app-5ab67.firebaseio.com",
    projectId: "udemy-todo-app-5ab67",
    storageBucket: "udemy-todo-app-5ab67.appspot.com",
    messagingSenderId: "455204254102"
  };
  firebase.initializeApp(config);
}catch (e){

}

export var firebaseRef = firebase.database().ref();
export default firebase;
