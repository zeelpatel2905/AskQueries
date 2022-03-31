import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Profile from './components/auth/Profile';
import Alert from './components/layout/Alert';
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  // <Provider store={store}>
    <Router>
      <Fragment>
        <NavBar />
        <Route exact path='/' component={Landing} />
        <section className='container'>
          {/* <Alert /> */}
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/profile' component={Profile} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  // </Provider>
);

export default App;
