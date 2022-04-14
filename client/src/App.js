import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Profile from './components/auth/Profile';
import Tag from './components/auth/Tag';
import Tags from './components/auth/Tags';
import About from './components/auth/About';
import Question from './components/auth/Question';
import MyQuestion from './components/auth/MyQuestion';
import AskQuestion from './components/auth/AskQuestion';
import Company from './components/auth/Company';
import PostVacancy from './components/auth/PostVacancy';
import Vacancy from './components/auth/Vacancy';
import Applicant from './components/auth/Applicant';
import Answer from './components/auth/Answer';
import PostAnswer from './components/auth/PostAnswer';

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
          <Route exact path='/tags' component={Tags} />
          <Route exact path='/about' component={About} />
          <Route exact path='/company' component={Company} />
          <Route exact path='/question' component={Question} />
          <Route exact path='/myquestion' component={MyQuestion} />
          <Route exact path='/askquestion' component={AskQuestion} />
          <Route exact path='/postVacancy' component={PostVacancy} />
          <Route exact path='/vacancy' component={Vacancy} />
          <Route exact path='/applicant' component={Applicant} />
          <Route exact path='/answer' component={Answer} />
          <Route exact path='/postAnswer' component={PostAnswer} />
        </Switch>
      </section>
      <Sidebar />
      <Footer />
    </Fragment>
  </Router>
  // </Provider>
);

export default App;
