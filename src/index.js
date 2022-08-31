import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './redux/reduxStore';
import { Provider } from 'react-redux';
import { StyledEngineProvider } from '@mui/material/styles';
import Classes from './App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <Provider store={store}>
                <App className='appWrapperContent' />
            </Provider>
        </StyledEngineProvider>
    </React.StrictMode>
);




