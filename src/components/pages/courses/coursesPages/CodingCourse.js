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
                            <h4 className="card-title">Старт: 01.03.2021 (пн.)</h4>
                            <h4 className="card-title">Кто может учавствовать:</h4>
                            <p className="card-text">Получить место можно заполнив анкету, а мы выберем 15 самых мотивированых из вас</p>
                            <h4 className="card-title">Описание: </h4>
                            <p className="card-text">Этот курс расчитан на абсолютных новичков с целью познакомить учеников с основами информатики и языка программирования Python. </p>
                            <h4 className="card-title">Цена: ₴0</h4>
                            <a href="https://forms.gle/6mXS6bwMM26T4aPm9" className="btn btn-success fill-out-btn">Заполнить форму</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row about-course text-left">
                <div className="col-sm ">
                    <h2>Что за курс</h2>
                    <p>Если Вам хотелось бы попробовать себя в роли программсита, но Вас останавливают двойки по
                        математике в школе, образование юриста или просто неуверенность в себе - этот курс как раз то,
                        что Вам нужно. </p>
                    <p>Занятия в этой серии лекций расчитаны на абсолютных нулей: все основы программирования
                        обьясняются с самого начала, а формат занятий предполагает постоянное общение с преподавателем.
                        Таким образом все недопонятые темы можно будет обсудить лично с преподавателем. </p>
                    <h2>Как будут отбираться участники? Почему бесплатно?</h2>
                    <p>Участники программы будут отбираться после заполнения после 20-го февраля на основе заполненым
                        форм. Участники с наибольшей мотивацией получат бесплатное место. </p>
                    <p>Мероприятие провожится при поддержке U.S. Department of State, Bureau of Educational and Cultural
                        Affairs (ECA) и American Councils for International Education: ACTR/ACCELS.</p>
                    <h2>Организация занятий</h2>
                    <ul>
                        <li>Занятия в онлайн режиме (смотритие расписание внизу)</li>
                        <li>После каждой лекции Вы получаете домашнее задание</li>
                        <li>Если есть вопросы вы можете общаться с преподавателем в письменном виде или назначить время для констультации в ZOOM</li>
                        <li>Те, кто сдают домашние задания вовремя получают бонусы</li>
                        <li>В конце курса вам выдаеться "табель" и сертификат, если вы посещали все лекции и выполняли дрмашние задания </li>
                    </ul>
                    <h2>Темы</h2>
                    <p><i className="fas fa-book-open timetable-img"/> Базовые знания в иформатике (Python 3):
                        <ul>
                            <li>переменная и ее типы</li>
                            <li>условия</li>
                            <li>циклы</li>
                            <li>списки</li>
                            <li>классы</li>
                        </ul>
                    </p>
                    <p><i className="fas fa-brain timetable-img"/>Problem Solving - упражнения на логику: благодаря
                        головоломкам можно научиться нестандартно мыслить. Кроме задач направленных на изучение Python,
                        некоторые упражнения будут в виде головоломок - это умение пригодиться и для решения жизненных
                        задач. </p>
                    <p><i className="fas fa-mouse timetable-img"/>Где будем писать код? Площадка Trinket и среда
                        разработки PyCharm (бесплатная версия).</p>
                    <p><i className="fas fa-code-branch timetable-img"/>Знакомство с системой управления проектами и
                        версиями кода: основы работы с Git, которые будем практиковать на платформе GitHub.</p>
                    <p><i className="fas fa-briefcase timetable-img"/>Навыки которые можно использовать в работе
                        (знакомство):
                        <li>обработка текста</li>
                        <li>визуализация данных</li>
                        <li>основы создания GUI</li>
                        <li>Web Scraping</li>
                    </p>
                    <h2><i className="fas fa-briefcase timetable-img"/>Почему Python?</h2>
                    <p>Python — самый быстрорастущий язык программирования за последние несколько лет. Вам точно стоит попробовать Python, если вы никогда не писали код, но хотите получить первую работающую программу как можно быстрее.</p>


                </div>
            </div>
            <div className="row">
                <div className="col-sm course-detail">
                    <h2 className="text-center">Преподаватель</h2>
                    <div className="col-sm text-center">
                        <img src="images/dutka.jpg" className="img-circle rounded-circle img-fluid avatar"
                             alt="teacher"/>
                        <p className="teacher-name">Дутка Диана</p>
                        <p><i className="fab fa-linkedin"/> <a className="inline-link"
                                                               href="https://www.linkedin.com/in/dianadutka/">Перейти на
                            LinkedIn</a></p>
                    </div>
                </div>
                <div className="col-sm">
                    <h2 className="text-center">Расписание</h2>
                    <h5>Курс состоит из 5-ти занятий: </h5>
                    <div className="timetable">
                        <p><i className="fas fa-book-open timetable-img"/>01.03.2021 понеделник</p>
                        <p><i className="fas fa-book-reader timetable-img"/>03.03.2021 среда</p>
                        <p><i className="fas fa-chalkboard-teacher timetable-img"/>10.03.2021 среда</p>
                        <p><i className="fas fa-laptop-code timetable-img"/>15.03.2021 понеделник</p>
                        <p><i className="fas fa-graduation-cap timetable-img"/>22.03.2021 понеделник</p>
                    </div>

                </div>
            </div>
            <div className="row justify-content-center end-course-description">
                <a className="btn btn-warning" href="https://forms.gle/6mXS6bwMM26T4aPm9">Подать заявку на курс</a>
            </div>
            <div className="row go-back-btn">
                <a className="btn btn-dark" href="/"><i className="far fa-hand-point-left"/> Обратно ко всем
                    мероприятиям</a>
            </div>
        </div>
        <Footer/>
    </div>

}