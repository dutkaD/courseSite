import React from 'react';
import '../../../App.css';
import Footer from "../../Footer";
import CourseTile from "./CourseTile";

export default function Courses() {
  return <div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm column">
          <CourseTile name="English" background="english_course"/>
        </div>
        <div className="col-sm column">
          <CourseTile name="Coding" background="coding_course"/>
        </div>
      </div>
      <div className="row">
        <div className="col-sm column">
          <CourseTile name="English&Code" background="english_and_code"/>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
}
