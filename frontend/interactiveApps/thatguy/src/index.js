import { initializeApp } from 'firebase/app'; //"https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAuth, onAuthStateChanged } from  'firebase/auth'; //"https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";
import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore'; //"https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyA2etcqh9itJg0u5864DPhtO4PU_XQeyEs",
    authDomain: "that-guy-tho.firebaseapp.com",
    projectId: "that-guy-tho",
    storageBucket: "that-guy-tho.appspot.com",
    messagingSenderId: "748261428574",
    appId: "1:748261428574:web:511f5eae550380bd84d3cf",
    measurementId: "G-0JB4YHX547"
});

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const todosCol = collection(db, 'todos');
const snapshot = await getDocs(todosCol);

onAuthStateChanged(auth, user => {
    if(user != null) {
        console.log('logged in!');
    } else {
        console.log('No user');
    }
});