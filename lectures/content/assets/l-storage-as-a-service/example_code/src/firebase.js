import firebase from 'firebase'

const config = {
    apiKey: "[enter Web API Key here]",
    authDomain: "fabric-754fe.firebaseapp.com",
    databaseURL: "https://fabric-754fe.firebaseio.com",
    projectId: "fabric-754fe",
    storageBucket: "fabric-754fe.appspot.com",
    messagingSenderId: "149734389056",
    appId: "1:149734389056:web:f58ebd2ce7489a7dfb76a5"
};

firebase.initializeApp(config);
export default firebase;