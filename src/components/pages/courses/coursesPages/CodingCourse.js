import React from "react";
import Footer from "../../../Footer";
import "../Course.css"


export default function CodingCourse() {
    return <div className="tntm-container-background">
        <div className="container white-background">
            <div className="row">
                <div className="col-sm course-name-block text-center">
                    <h1>Programming for all</h1>
                    <h3>Программирование для начинающих</h3>
                </div>
                <div className="col-sm my-auto">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">СТАРТ: 01.03.2021</h4>
                            <h4 className="card-title">Кто может учавствовать:</h4>
                            <p className="card-text"></p>
                            <h4 className="card-title">Описание: </h4>
                            <p className="card-text"></p>
                            <h4 className="card-title">Расписание: </h4>
                            <p className="card-text"></p>
                            <h4 className="card-title">Цена: </h4>
                            <p className="card-text"></p>
                            <a href="/" className="btn btn-warning">Подать заявку</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row about-course text-center">
                <div className="col-sm ">
                    <h2>Что за курс</h2>
                    <p>Этот курс расчитан на .... </p>
                    <h2>Как будут отбираться участники?</h2>
                    <p>Участники программы будут отбираться после заполнения ... </p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm course-detail">
                    <h2 className="text-center">Преподаватель</h2>
                    <p>Дутка Диана</p>
                </div>
                <div className="col-sm">
                    <h2 className="text-center">Расписание</h2>
                    <h5>Курс состоит из 5-ти занятий: </h5>
                        <p>01.03 понеделник</p>
                        <p>03.03 среда</p>
                        <p>10.03 среда</p>
                        <p>15.03 понеделник</p>
                        <p>22.03 понеделник</p>
                </div>
            </div>
            <div className="row justify-content-center end-course-description">
                <a  className="btn btn-warning" href="/">Подать зявку на курс</a>
            </div>
            <div className="row go-back-btn">
                <a  className="btn btn-dark" href="/"><i className="far fa-hand-point-left"/> Обратно ко всем мероприятиям</a>
            </div>
        </div>
        <Footer/>
    </div>

}