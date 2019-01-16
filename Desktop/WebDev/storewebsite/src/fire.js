import firebase from 'firebase';

  const config = {
    apiKey: "AIzaSyB_RSwJITT40bctoQkI89D8U0bx3N3acKs",
    authDomain: "store-shop-website.firebaseapp.com",
    databaseURL: "https://store-shop-website.firebaseio.com",
    projectId: "store-shop-website",
    storageBucket: "",
    messagingSenderId: "927648710175"
  }


  var fire = firebase.initializeApp(config);


export default fire;