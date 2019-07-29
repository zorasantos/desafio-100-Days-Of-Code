import firebase from 'firebase'

    firebase.initializeApp({
        apiKey: "AIzaSyAmtnuL1v6UoEaUCmxlGB70b-GZdIgceYk",
        authDomain: "my-reactflix.firebaseapp.com",
        databaseURL: "https://my-reactflix.firebaseio.com",
        projectId: "my-reactflix",
        storageBucket: "",
        messagingSenderId: "909233310712",
        appId: "1:909233310712:web:f0ec27b7f1073175"
    })

const db = firebase.database()

export { db }
