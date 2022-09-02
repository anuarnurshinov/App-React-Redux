import './App.css';
import React from 'react'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginContainer from './components/Login/LoginContainer';
import { connect } from 'react-redux';
import { initialize } from './redux/app/appReducer';
import Preloader from './components/Common/Preloader/Preloader';




class App extends React.Component {

  componentDidMount() {
    this.props.initialize()
  }
  render() {
    if (this.props.initialized) {
      return (
        <BrowserRouter >
          <Routes class='app-wrapper'>
            <Route path='/' element={<Layout />}>
              <Route path='/*' element={<div> Страница не найдена </div>} />
              <Route path='/login' element={<LoginContainer />} />
              <Route path='/profile' element={<Navigate to={'/profile/' + this.props.ownerId} />} />
              <Route path='/profile/:id' element={<ProfileContainer />} />
              <Route path='/dialogs/*' element={<DialogsContainer />} />
              <Route path='/news' element={<News />} />
              <Route path='/music' element={<Music />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/users' element={<UsersContainer />} />
            </Route>
          </Routes>
        </BrowserRouter>);
    }
    else {
      return <Preloader />
    }
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
    ownerId: state.auth.userId
  }
}


export default connect(mapStateToProps, { initialize })(App);




