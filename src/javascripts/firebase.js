import * as firebase from 'firebase'
let database

export const init = () => {
  let config = {
    apiKey: "AIzaSyCVJEMxn3wpwPWlYjRqPATK_whJR80TVoA",
    authDomain: "to-do-list-b1d37.firebaseapp.com",
    databaseURL: "https://to-do-list-b1d37.firebaseio.com",
    projectId: "to-do-list-b1d37",
    storageBucket: "to-do-list-b1d37.appspot.com",
    messagingSenderId: "41277559024"
  }
  firebase.initializeApp(config)
  database = firebase.database()
}