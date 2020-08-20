import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBlPeAUst-6k43oZPbNnBLBiyNPEdgQ2b8",
    authDomain: "whatsappclone-de3cd.firebaseapp.com",
    databaseURL: "https://whatsappclone-de3cd.firebaseio.com",
    projectId: "whatsappclone-de3cd",
    storageBucket: "whatsappclone-de3cd.appspot.com",
    messagingSenderId: "3726260076",
    appId: "1:3726260076:web:106897909634fe535ea549",
    measurementId: "G-GM8724TK6H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;