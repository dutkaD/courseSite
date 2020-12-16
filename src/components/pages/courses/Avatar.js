import React from 'react';
import './CourseOverview.css'
export default function Avatar(props) {
    return <div>
        <div className="row">
            <div className="col-sm text-center">
                <img src="images/anna.jpg" className="rounded-circle img-fluid avatar" alt="Anna - teacher at Ficus school"/>
            </div>
        </div>
        <h3 className="row justify-content-center">
                {props.name}
           </h3>
    </div>



}
