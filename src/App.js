import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CourseOverview from './components/pages/courses/CourseOverview';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import PageCourse from "./components/pages/courses/PageCourse";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/courses' component={CourseOverview} />
          <Route path='/aboutUs' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/english_course' component={() => <PageCourse name="English"/>} />
          <Route path='/coding_course' component={() => <PageCourse name="Coding"/>} />
          <Route path='/english_and_code' component={() => <PageCourse name="English&Code"/>} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
