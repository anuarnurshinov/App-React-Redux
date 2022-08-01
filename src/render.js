import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { addPost } from './redux/state';
const root = ReactDOM.createRoot(document.getElementById('root'));

export let renderEntireTree = (props) => {
  root.render(
    <React.StrictMode>
      <App state={props} addPost={addPost} />
    </React.StrictMode>
  );
}






