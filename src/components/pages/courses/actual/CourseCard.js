import React from 'react';
import "./Actual.css"
import {Link} from "react-router-dom";

export default function CourseCard(props) {
    return <div className="col">
        <Link className="course-link" to={props.linkTo}>
            <div className="card card-container">
                <div className={"card-header " + (props.current ? "nerdy-theme" : "ficus-theme")}>
                    <h2>{props.header}</h2>
                </div>
                <img className="card-img-top card-image" src={props.image} alt="course description"/>
                <div className="card-body">
                    <div className="course-details">
                        <h4 className="card-title">{props.title}</h4>
                        <p className="short">{props.shortDescription}</p>
                        <p className="start">Начало: {props.start}</p>
                        <p className="start">Цена: {props.price}</p>
                    </div>
                </div>
                <a href={props.linkTo} className={"btn stick-bottom " + (props.current ? "nerdy-theme " : "ficus-theme")}>{props.buttonText}</a>
            </div>
        </Link>

    </div>
}