import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDGBCBwiG8Wf-cQz5d0HQdnY_loBGVRvqQ",
  authDomain: "fun-project2.firebaseapp.com",
  projectId: "fun-project2",
  storageBucket: "fun-project2.appspot.com",
  messagingSenderId: "153052380259",
  appId: "1:153052380259:web:d5839412a9082f85718c56",
  measurementId: "G-B6T1JDZFY0"
};
  // Instantiate a Firebase app.  
  const fire = firebase.initializeApp(firebaseConfig);
  
export default fire;