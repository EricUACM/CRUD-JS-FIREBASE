// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
  import { getFirestore, collection, addDoc, getDocs, deleteDoc, onSnapshot, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB2vAvU_hrQHR7fXM_akvMADmwMSeelVbg",
    authDomain: "fir-js-crud-1f58e.firebaseapp.com",
    projectId: "fir-js-crud-1f58e",
    storageBucket: "fir-js-crud-1f58e.appspot.com",
    messagingSenderId: "893150548958",
    appId: "1:893150548958:web:f586e9af24b0032c00834f"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore()

  export const saveTask = (title, description) =>
      addDoc(collection(db, 'task'), {title, description});

  export const getTasks = () => getDocs(collection(db, 'task'));

  export const onGettask = (callback) => onSnapshot(collection(db, 'task'), callback);

  export const deleteTask = id => deleteDoc(doc(db, 'task', id));

  export const getTask = id => getDoc(doc(db, 'task', id));

  export const updateTask = (id, newFields) => updateDoc(doc(db, 'task', id), newFields);

