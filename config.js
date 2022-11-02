 import firebase from "firebase";


var firebaseConfig = {
  apiKey: "AIzaSyDniasEvaFYLAjWfyC6o5q2Ebt4T0EF3yw",
  authDomain: "class-37-car-multiplayer.firebaseapp.com",
  databaseURL: "https://class-37-car-multiplayer-default-rtdb.firebaseio.com",
  projectId: "class-37-car-multiplayer",
  storageBucket: "class-37-car-multiplayer.appspot.com",
  messagingSenderId: "1080698428246",
  appId: "1:1080698428246:web:b5a7f8de4f17691d1114f7"
};
firebase.initializeApp(firebaseConfig)
  export default firebase.database()
 

  