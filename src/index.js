import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './redux/reduxStore';
import { Provider } from 'react-redux';



const root = ReactDOM.createRoot(document.getElementById('root'));

// let callSubscriber = (props) => {
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
// }


// store.subscribe(callSubscriber)
// callSubscriber(store.getState())




