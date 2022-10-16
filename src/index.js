import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseCOntext } from './store/firebaseContext'
import firebase from './firebase/config'

ReactDOM.render(
    <FirebaseCOntext.Provider value={{ firebase }}>
        <App />
    </FirebaseCOntext.Provider>
    , document.getElementById('root')
);
