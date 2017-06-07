import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDFXNSvf5EGG3_5HvfU7MkcRZZIc8Hf9XQ",
  authDomain: "udemy-todo-app-5ab67.firebaseapp.com",
  databaseURL: "https://udemy-todo-app-5ab67.firebaseio.com",
  projectId: "udemy-todo-app-5ab67",
  storageBucket: "udemy-todo-app-5ab67.appspot.com",
  messagingSenderId: "455204254102"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app:{
    name: 'Todo App',
    version: "1.0.0"
  },
  isRunning: true,
  user:{
    name: "Taiyo",
    age: 24
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) =>{
  console.log('New todo added', snapshot.key, snapshot.val());
})
// notesRef.on('child_changed', (snapshot) =>{
//   console.log('child_changed', snapshot.key, snapshot.val());
// })
// notesRef.on('child_removed', (snapshot) =>{
//   console.log('child_removed', snapshot.key, snapshot.val());
// })


todosRef.push({
  text: 'Walk the dog'
})

todosRef.push({
  text: 'Run'
})
