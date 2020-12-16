import React from 'react';
import './CourseOverview.css'
import Cards from "./cards/Cards";
import Avatar from "./Avatar";
import Footer from "../../Footer";

export default function PageCourse(props) {
    return <div className="container-fluid course-page">
        <div className="container">
            <div>
                <div className="row upper-course-part">
                    <div className="col-sm">
                        <Avatar name="Анна Синящик"/>
                    </div>
                    <div className="col-sm my-auto">
                        <h1 className="course-header align-middle">{props.name}</h1>
                        <h1 className="course-header align-middle">Ficus School</h1>
                    </div>
                </div>
                <div>
                    <Cards/>
                </div>
                </div>
        </div>
<Footer/>
    </div>



}
