import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));

let callSubscriber = (props) => {
    root.render(
        <React.StrictMode>
            <App dispatch={store.dispatch.bind(store)} state={store.getState()} />
        </React.StrictMode>
    );
}

store.subscribe(callSubscriber)
callSubscriber(store.getState())




