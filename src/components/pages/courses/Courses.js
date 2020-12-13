import React from 'react';
import '../../../App.css';
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Footer from "../../Footer";

export default function Courses() {
  return <div>
    <div className="container-fluid fill">
      <div className="row">
        <div className="col-sm">
          <LeftSide />
        </div>
        <div className="col-sm">
          <RightSide/>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
}
