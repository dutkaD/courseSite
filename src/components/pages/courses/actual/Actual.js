import React from 'react';
import "./Actual.css"
import CourseCard from "./CourseCard";

function Actual() {


    return (
        <div className="container">
            <h1>Актуальные мероприятия </h1>
            <div className="row">
                <CourseCard
                    image="images/code.jpeg"
                    header="Programming for all"
                    title="Курс программирования для начинающих"
                    shortDescription="5-дневный интенсив при поддержке U.S. Department of State, Bureau of Educational and Cultural Affairs и American Councils for International Education."
                    start="01.03.2021"
                    linkTo="/programming-for-all"
                    buttonText="Полное описание курса"
                    price="бесплатно (после отбора самых мотивированых)"
                    current={true}
                />

                <CourseCard
                    image="images/coding.jpg"
                    header="5 занятий по Python для новичков"
                    title="Базовый курс для гуманитариев."
                    shortDescription="Курс из 5 занятий поможет безболезненно ворваться в IT. Основы программирования Python с практическими заданиями."
                    start="07.05.2021"
                    linkTo="/programming-for-all"
                    buttonText="Детали и регистрация"
                    price="от ₴2999"
                    current={true}
                />

                <CourseCard
                    image="images/speak.jpg"
                    header="Fake It Until You Make It"
                    title="Разговорный курс для образованного новичка"
                    shortDescription="10-дневный интенсив по грамматике и фонетике научит создавать иллюзию идеального английского."
                    start="19 апреля, 19:00"
                    linkTo="/programming-for-all"
                    buttonText="Полное описание курса"
                    price="early birds (до 1 марта) —  ₴3500, после 1 марта — ₴4000"

                />
            </div>

            <div className="row">
                <CourseCard
                    image="images/vet.jpg"
                    header="Лекция ветеринара"
                    title="How I Met Your Pet"
                    shortDescription="Встреча с ветврачем + мини-словарик для практики английского в подарок "
                    start="28 февраля, 11:00"
                    linkTo="/programming-for-all"
                    buttonText="Полное описание курса"
                    price="₴0, предварительная регистрация обязательнаа"
                />

                <CourseCard
                    image="images/silent.jpg"
                    header="[Speaking] Silent Club"
                    title="Разговорный клуб для скромных и немногословных"
                    shortDescription="Просмотр и обсуждение фильма на английском в Telegram-чате"
                    start="31 марта, 19:00"
                    linkTo="/programming-for-all"
                    buttonText="Узнать детали и зарегестрировться"
                    price="₴0, предварительная регистрация обязательна "
                />
            </div>
        </div>
    );
}

export default Actual;
