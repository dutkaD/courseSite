import React from 'react';
import '../../../App.css';
import './CourseOverview.css';
import {Link} from "react-router-dom";

export default function CourseTile(props) {
    return <Link className='course-link' to={props.path}>
                <div className={`highlight d-flex fill align-items-center course_background justify-content-center 
                            ${props.path}`}>
                    <h1 className='headline_course'>{props.name}</h1>
                </div>
            </Link>
}
