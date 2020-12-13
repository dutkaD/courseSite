import React from 'react';
import '../../../App.css';
import Footer from "../../Footer";
import CourseTile from "./CourseTile";

export default function CourseOverview() {
  return <div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm column">
          <CourseTile name="English" path="english_course"/>
        </div>
        <div className="col-sm column">
          <CourseTile name="Coding" path="coding_course"/>
        </div>
      </div>
      <div className="row">
        <div className="col-sm column">
          <CourseTile name="English&Code" path="english_and_code"/>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
}
