import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBrPX8VAI0rSfke6iViWTmLHf1HhRBwHZE',
  authDomain: 'zora-pizzaria.firebaseapp.com',
  databaseURL: 'https://zora-pizzaria.firebaseio.com',
  projectId: 'zora-pizzaria',
  storageBucket: '',
  messagingSenderId: '886846004460',
  appId: '1:886846004460:web:4afb653c74b9e052'
}

firebase.initializeApp(firebaseConfig)

export default firebase
