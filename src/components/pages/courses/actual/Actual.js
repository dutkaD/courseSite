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
                    shortDescription="Бесплатный курс из 5 уроков спонсированый организацией FLEX. 15 бесплатных мест."
                    start="01.03.2021"
                    linkTo="/programming-for-all"
                    buttonText="Полное описание курса"
                    primaryColor="bg-warning"
                    price="бесплатно (после отбора самых мотивированых)"
                    current={true}
                />

                <CourseCard
                    image="images/coding.jpeg"
                    header="5 занятий по Python для новичков"
                    title="Базовый курс программирования для начинающих в режиме онлайн."
                    shortDescription="Курс из 5 уроков для гуманитариев и людей без опыта в программировании. "
                    start="07.05.2021"
                    linkTo="/programming-for-all"
                    buttonText="Детали и регистрация"
                    price="от 2999 грн."
                    current={false}
                />

                <CourseCard
                    image="images/london.jpg"
                    header="Мероприятие от Ани"
                    title="Кто знает что это будет на этот раз"
                    shortDescription="Курс из 5 занятий расчитаный для людей без опыта в программирвоании."
                    start="уточняйте у организатора"
                    linkTo="/programming-for-all"
                    buttonText="Полное описание курса"
                    price="уточняйте у организатора"

                />
            </div>

            <div className="row">
                <CourseCard
                    image="images/books.jpg"
                    header="Мероприятие от Ани"
                    title="Кто знает что это будет на этот раз"
                    shortDescription="Курс из 5 занятий расчитаный для людей без опыта в программирвоании."
                    start="уточняйте у организатора"
                    linkTo="/programming-for-all"
                    buttonText="Полное описание курса"
                    price="уточняйте у организатора"
                />

                <CourseCard
                    image="images/phone.jpg"
                    header="Мероприятие от Ани"
                    title="Кто знает что это будет на этот раз"
                    shortDescription="Ничего не понятно но очень интересно."
                    start="уточняйте у организатора"
                    linkTo="/programming-for-all"
                    buttonText="Полное описание курса"
                    price="уточняйте у организатора"

                />
            </div>
        </div>
    );
}

export default Actual;
