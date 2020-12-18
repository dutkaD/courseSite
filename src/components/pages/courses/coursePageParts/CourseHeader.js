import React from "react";
import Avatar from "./Avatar";

export default function CourseHeader(props) {

    return <div className="row upper-course-part header-background" >
        <div className="col-sm">
            <Avatar name={props.teacherName} imgPath={props.imgPath}/>
        </div>
        <div className="col-sm my-auto">
            <h1 className="course-header align-middle">{props.name}</h1>
            <h1 className="course-header align-middle">{props.schoolName}</h1>
        </div>
    </div>
}