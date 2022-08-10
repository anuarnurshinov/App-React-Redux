import './App.css';
import Profile from './components/Profile/Profile';

import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import DialogsContainer from './components/Dialogs/DialogsContainer';



const App = (props) => {
  return (
    <BrowserRouter >
      <Routes class='app-wrapper-content'>
        <Route path='/' element={<Layout />}>
          <Route path='/profile' element={<Profile
            store={props.store} />} />
          <Route path='/dialogs/*' element={<DialogsContainer
            store={props.store} dispatch={props.dispatch}
          />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
