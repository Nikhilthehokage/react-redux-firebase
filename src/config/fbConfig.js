import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCx_XEMU8FMMd6p1fgHs97kbng5-B0f_2U",
    authDomain: "sampleapp-e2461.firebaseapp.com",
    databaseURL: "https://sampleapp-e2461.firebaseio.com",
    projectId: "sampleapp-e2461",
    storageBucket: "sampleapp-e2461.appspot.com",
    messagingSenderId: "849331463893",
    appId: "1:849331463893:web:c3e3ccf2c18858f1b8e45c",
    measurementId: "G-XN86TDY30R"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase


