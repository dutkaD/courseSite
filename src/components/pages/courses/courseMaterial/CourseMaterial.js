import React from "react";
import Footer from "../../../Footer";
import Slide from "./parts/Slide";

export default function CourseMaterial() {
    return <div>
        <div className="container-fluid">
            <h1>Материалы для курса "Programming for all"</h1>
            <h2>Лекция 1</h2>
            <div>
                <Slide number="1" date = "01.03.2021"/>
                <i className="fab fa-youtube timetable-img"/>Полезные видео к лекции 1:
                <ul>
                    <li>Переменная <a href="https://youtu.be/XcnxePKy2xY">(смотреть в
                        YouTube)</a></li>
                    <li>Типы переменных <a href="https://youtu.be/WbsaJAzh9B0">(смотреть в
                        YouTube)</a></li>
                    <li>Условия <a href="https://youtu.be/EggJRTzid1M">(смотреть в YouTube)</a>
                    </li>
                    <li> Функция input() и преобразования из int в str <a href=" https://youtu.be/yuyq2BrHMJE">(смотреть
                        в YouTube)</a>
                    </li>
                </ul>
            </div>
            <h2>Лекция 2</h2>
        </div>
        <Footer/>
    </div>
}