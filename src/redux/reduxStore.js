import { configureStore } from '@reduxjs/toolkit'
import { profileReducer } from './profileReducer';
import { dialogsReducer } from './dialogsReducer';
import { sidebarReducer } from './sidebarReducer';


export let store = configureStore({
    reducer: {
        dialogsPage: dialogsReducer,
        profilePage: profileReducer,
        sidebar: sidebarReducer,
    }
});




