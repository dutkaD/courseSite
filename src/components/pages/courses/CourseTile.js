import React from 'react';
import '../../../App.css';
import './Course.css';

export default function CourseTile(props) {
    return <div className={`highlight d-flex fill align-items-center course_background justify-content-center 
    ${props.background}`}>
        <h1 className='headline'>{props.name}</h1>;
    </div>
}
