import firebase from 'firebase'

const config = {
  apiKey: "[fill this in]",
  authDomain: "info-253-test-project-39206.firebaseapp.com",
  databaseURL: "https://info-253-test-project-39206.firebaseio.com",
  projectId: "info-253-test-project-39206",
  storageBucket: "",
  messagingSenderId: "726441524800"
};
firebase.initializeApp(config);
export default firebase;
