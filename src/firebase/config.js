import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCFwzUEgq9cjqM_cLga8OywF3nSyOukNqs",
    authDomain: "olx-clone-ad97f.firebaseapp.com",
    projectId: "olx-clone-ad97f",
    storageBucket: "olx-clone-ad97f.appspot.com",
    messagingSenderId: "718940307717",
    appId: "1:718940307717:web:700a0a734b9c2f3581376c",
    measurementId: "G-VCT8824DMJ"
};
export default firebase.initializeApp(firebaseConfig)