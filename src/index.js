import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { state } from './redux/state';
import { addPost } from './redux/state';
import { renderEntireTree } from './render'
const root = ReactDOM.createRoot(document.getElementById('root'));


renderEntireTree(state)




