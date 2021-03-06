import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './components/pages/SignUp';
import EnglishCourse from "./components/pages/courses/coursesPages/EnglishCourse";
import CodingCourse from "./components/pages/courses/coursesPages/CodingCourse";
import AboutUs from "./components/pages/courses/aboutUs/AboutUs";
import CourseMaterial from "./components/pages/courses/courseMaterial/CourseMaterial";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/aboutUs' component={AboutUs} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/english_course' component={() => <EnglishCourse name="English"/>} />
          <Route path='/programming-for-all' component={() => <CodingCourse />} />
          <Route path='/english_and_code' component={() => <CodingCourse />} />
          <Route path='/resources' component={() => <CourseMaterial />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
