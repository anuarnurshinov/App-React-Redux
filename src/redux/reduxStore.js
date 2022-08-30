import { applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { profileReducer } from './profile/profileReducer';
import { dialogsReducer } from './dialogs/dialogsReducer';
import { sidebarReducer } from './sidebar/sidebarReducer';
import { usersReducers } from './users/usersReducer';
import { authReducer } from './auth/authReducer';
import { appReducer } from './app/appReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = configureStore({
    reducer: {
        dialogsPage: dialogsReducer,
        profilePage: profileReducer,
        sidebarPage: sidebarReducer,
        usersPage: usersReducers,
        auth: authReducer,
        app: appReducer,
    },
}, composeEnhancers(applyMiddleware()));

window.store = store




