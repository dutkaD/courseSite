import React from 'react';
import '../CourseOverview.css'
export default function Avatar(props) {
    return <div>
        <div className="row">
            <div className="col-sm text-center">
                <img src={props.imgPath} className="img-circle rounded-circle img-fluid avatar" alt="teacher"/>
            </div>
        </div>
        <div className="row justify-content-center">
            <h3>{props.name}</h3>
        </div>
    </div>



}
