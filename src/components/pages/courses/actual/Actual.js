import React from 'react';
import "./Actual.css"
import CourseCard from "./CourseCard";

function Actual() {


    return (
        <div className="container">

            <div className="row">
                <h1>Предстояшие мероприятия</h1>
            </div>

            <div className="row">
                <CourseCard
                    image="images/code.jpeg"
                    header="Курс 'Тише едешь - дальше будешь.' "
                    title="Python без стресса."
                    shortDescription="Курс из 12 занятий (*45 минут) расчитан на людей, которые не имеют опыта в изучении программировния."
                    start="дата будет назначена после 01.05.2021"
                    linkTo="/programming-for-all"
                    buttonText="Полное описание курса"
                    price="early birds (предоплата до 01.05) - 1800 грн., после 01.05 - 2999 грн."
                    current={true}
                />

                <CourseCard
                    image="images/code.jpeg"
                    header="'Need For Speed' Python - интенсив."
                    title="Курс по основам программирования на Python"
                    shortDescription="Курс из 5 занятий (*120 минут) расчитан на людей, которые не имеют опыта в изучении программировния, но хотят "
                    start="дата будет назначена после 01.05.2021"
                    linkTo="/programming-for-all"
                    buttonText="Полное описание курса"
                    price="early birds (предоплата до 01.05) - 2000 грн., после 01.05 - 3200 грн."
                    current={true}
                />

                <CourseCard
                    image="images/coding.jpg"
                    header="Workshop 'Что такое Git?'"
                    title="2 часовой воркшоп по основам Git"
                    shortDescription="Для участия в воркшопе не обязательные глубокие знания в программировании. Достаточно знать основные понятия."
                    start="20.06.2021 - 19.00"
                    linkTo="/what-is-git-workshop"
                    buttonText="Детали и регистрация"
                    price="200 грн."
                    current={true}
                />



            </div>
            <div className="row">
                <CourseCard
                    image="images/coding.jpg"
                    header="Web Scraping Workshop"
                    title="3 часовой воркшоп"
                    shortDescription="Воркшоп рачитан на людей, которые уже имеют некий опыт с питоном."
                    start="20.06.2021 - 19.00"
                    linkTo="/what-is-git-workshop"
                    buttonText="Детали и регистрация"
                    price="150 грн."
                    current={true}
                />

            </div>

            <div className="row">
                <h1>Прошедшие мероприятия</h1>
            </div>
            <div className="row">

                <CourseCard
                    image="images/code.jpeg"
                    header="Programming for all"
                    title="Курс программирования для начинающих"
                    shortDescription="5-дневный интенсив при поддержке U.S. Department of State, Bureau of Educational and Cultural Affairs и American Councils for International Education."
                    start="01.03.2021"
                    linkTo="/programming-for-all"
                    buttonText="Полное описание курса / Отзывы"
                    price="бесплатно (после отбора самых мотивированых)"
                    current={true}
                />
            </div>
        </div>
    );
}

export default Actual;
