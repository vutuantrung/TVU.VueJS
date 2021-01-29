import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD89fu37IGA6Snft7kKhdG58dCuz2wzYBw",
    authDomain: "turnout-72e8a.firebaseapp.com",
    databaseURL: "https://turnout-72e8a.firebaseio.com",
    projectId: "turnout-72e8a",
    storageBucket: "turnout-72e8a.appspot.com",
    messagingSenderId: "1081598475359"
};

export const firebaseApp = firebase.initializeApp(config);
export const eventsRef = firebaseApp.database().ref().child('events');