import React from 'react';
import '../CourseOverview.css'
import Footer from "../../../Footer";
import Cards from "../cards/Cards";
import CourseHeader from "../coursePageParts/CourseHeader";

export default function EnglishCourse(props) {
    return <div className="container-fluid course-page english-container-background">
        <div className="container">
            <CourseHeader name={props.name} schoolName="Ficus School" imgPath="images/anna.jpg" teacherName={"Анна Синящик"}/>
            <Cards/>
        </div>
        <Footer/>
    </div>



}
