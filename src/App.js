import './App.css';

import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';



const App = (props) => {
  return (
    <BrowserRouter >
      <Routes class='app-wrapper-content'>
        <Route path='/' element={<Layout />}>
          <Route path='/*'></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/profile/:id' element={<ProfileContainer />} />
          <Route path='/dialogs/*' element={<DialogsContainer />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/users' element={<UsersContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
