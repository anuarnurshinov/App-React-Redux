import { configureStore } from '@reduxjs/toolkit'
import { profileReducer } from './profileReducer';
import { dialogsReducer } from './dialogsReducer';
import { sidebarReducer } from './sidebarReducer';
import { usersReducers } from './usersReducer';


export let store = configureStore({
    reducer: {
        dialogsPage: dialogsReducer,
        profilePage: profileReducer,
        sidebarPage: sidebarReducer,
        usersPage: usersReducers,
    }
});


window.store = store

