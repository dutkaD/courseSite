import React from 'react';
import '../../../App.css';
import Footer from "../../Footer";
import CourseSide from "./CourseSide";

export default function Courses() {
  return <div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm column">
          <CourseSide name="English"/>
        </div>
        <div className="col-sm column">
          <CourseSide name="Coding"/>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
}
