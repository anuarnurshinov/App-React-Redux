import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));

let callSubscriber = (props) => {
    root.render(
        <React.StrictMode>
            <App state={store.getState()} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} />
        </React.StrictMode>
    );
}

store.subscribe(callSubscriber)
callSubscriber(store.getState())




