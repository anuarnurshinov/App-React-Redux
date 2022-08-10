import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './redux/reduxStore';



const root = ReactDOM.createRoot(document.getElementById('root'));

let callSubscriber = (props) => {
    root.render(
        <React.StrictMode>
            <App store={store} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>
    );
}


store.subscribe(callSubscriber)
callSubscriber(store.getState())




