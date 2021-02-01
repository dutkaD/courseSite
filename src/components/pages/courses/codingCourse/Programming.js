import React from "react";
import CourseHeader from "../coursePageParts/CourseHeader";
import Cards from "../cards/Cards";
import Footer from "../../../Footer";


export default function Programming (props) {
  return <div><div className="container-fluid course-page tntm-container-background">
      <div className="container ">
          <CourseHeader name={props.name} schoolName="Talk Nerdy To Me" imgPath="images/diana.jpg" teacherName = "Диана Дутка"/>
          <Cards/>
      </div>
  </div>
      <Footer />
    </div>
}