import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Profile from './components/auth/Profile';
import Tag from './components/auth/Tag';
import About from './components/auth/About';
import Question from './components/auth/Question';
import MyQuestion from './components/auth/MyQuestion';
import AskQuestion from './components/auth/AskQuestion';
import Company from './components/auth/Company';

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
            <Route exact path='/tag' component={Tag} />
            <Route exact path='/about' component={About} />
            <Route exact path='/company' component={Company} />
            <Route exact path='/question' component={Question} />
            <Route exact path='/myquestion' component={MyQuestion} />
            <Route exact path='/askquestion' component={AskQuestion} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  // </Provider>
);

export default App;
