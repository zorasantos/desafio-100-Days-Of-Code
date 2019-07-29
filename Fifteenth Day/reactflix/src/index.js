import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { Store } from './store'
import * as serviceWorker from './serviceWorker';
//import { db } from './config/firebase'


// const videos = db.ref('videos')

// videos.child('123').set({
//     id: '123',
//     title: 'Data Structure'
// })

// videos.update({
//     id: null,
//     title: null
// })


// videos.on('value', (snapshot) => {
//     console.log('snapshot:', snapshot.val())
// }, (error) => {
//     console.log('error:', error)
// })

ReactDOM.render(
        <Provider store={Store}>
            <App />
        </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
