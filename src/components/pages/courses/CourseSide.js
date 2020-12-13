import React from 'react';
import '../../../App.css';
import './course.css';

export default function CourseSide(props) {
    return <div className={`d-flex align-items-center fill justify-content-center course_background ${props.name === 'English' ? 'english_course' : 'coding_course'}`}>
        <h1 className='headline'>{props.name}</h1>;
    </div>
}
