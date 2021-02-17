import React from "react";
import {Link} from "react-router-dom";

export default function Slide(props) {
    return <div>
        <p><i className="fas fa-file-download timetable-img "/>
            <Link className="inline-link" to="/files/Lesson 1.pdf" target="_blank" download>Скачать слайды лекция {props.number} (от {props.date})</Link>
        </p>
    </div>
}