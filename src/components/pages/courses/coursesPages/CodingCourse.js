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
                            <h4 className="card-title">СТАРТ: 01.03.2021 (пн.)</h4>
                            <h4 className="card-title">Кто может учавствовать:</h4>
                            <p className="card-text"></p>
                            <h4 className="card-title">Описание: </h4>
                            <p className="card-text"></p>
                            <h4 className="card-title">Цена: </h4>
                            <p className="card-text"></p>
                            <a href="/" className="btn btn-success fill-out-btn">Заполнить форму</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row about-course text-left">
                <div className="col-sm ">
                    <h2>Что за курс</h2>
                    <p>Если Вам хотелось бы попробовать себя в роли программсита, но Вас останавливают двойки по математике в школе, образование юриста или просто неуверенность в себе - этот курс как раз то, что Вам нужно. </p>
                    <p>Занятия в этой серии лекций расчитаны на абсолютных нулей: все основы программирования обьясняются с самого начала, а формат занятий предполагает постоянное общение с преподавателем. Таким образом все недопонятые темы можно будет обсудить лично с преподавателем. </p>
                    <h2>Как будут отбираться участники? Почему бесплатно?</h2>
                    <p>Участники программы будут отбираться после заполнения после 20-го февраля на основе заполненым форм. Участники с наибольшей мотивацией получат бесплатное место. </p>
                    <p>Мероприятие провожится при поддержке U.S. Department of State, Bureau of Educational and Cultural Affairs (ECA) и American Councils for International Education: ACTR/ACCELS.</p>
                    <h2>Организация занятий</h2>
                    <p>Раз в неделю проходит занятие в онлайн формате.</p>
                    <p>Каждую неделю вы получаете задание для домашней работы.</p>
                    <h2>Темы</h2>
                    <p>Базовые знания в иформатике: переменная и их типы, условия, циклы, списки, условия, классы. Версия Python - Python3 </p>
                    <p>Problem Solving - упражнения на логику.</p>
                    <p>Где будем писать код? Площадка Trinket и среда разработки PyCharm (бесплатная версия).</p>
                    <p>Знакомство с системой управления проектами и версиями кода: основы работы с Git, которые будем практиковать на платформе GitHub.</p>
                    <p>Навыки которые можно использовать в работе: обработка текста, визуализация данных, основы создания GUI, Web Scraping (базовые навыки).</p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm course-detail">
                    <h2 className="text-center">Преподаватель</h2>
                    <div className="col-sm text-center">
                        <img src="images/dutka.jpg" className="img-circle rounded-circle img-fluid avatar" alt="teacher"/>
                        <p className="teacher-name">Дутка Диана</p>
                        <p><i className="fab fa-linkedin"/> <a  className="inline-link" href="https://www.linkedin.com/in/dianadutka/">Перейти на LinkedIn</a></p>
                    </div>
                </div>
                <div className="col-sm">
                    <h2 className="text-center">Расписание</h2>
                    <h5>Курс состоит из 5-ти занятий: </h5>
                    <div className="timetable">
                        <p> <i className="fas fa-book-open timetable-img"/>01.03.2021 понеделник</p>
                        <p><i className="fas fa-book-reader timetable-img"/>03.03.2021 среда</p>
                        <p><i className="fas fa-chalkboard-teacher timetable-img"/>10.03.2021 среда</p>
                        <p><i className="fas fa-laptop-code timetable-img"/>15.03.2021 понеделник</p>
                        <p><i className="fas fa-graduation-cap timetable-img"/>22.03.2021 понеделник</p>
                    </div>

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