import React from 'react';
import "./AboutUs.css"
import Footer from "../../../Footer";

function AboutUs() {
    return (
        <>
            <div className="container">
                <h1>Кто мы? </h1>
                <h2>Наша миссия</h2>
                <p> Мы что-то делаем, очень важное. </p>
                <h2>Фикус</h2>
                <p> Школа английского языка </p>
                <h2>Talk Nerdy To Me</h2>
                <p> Программирование для чайников </p>
                <h2>Связаться с нами</h2>
                <p>talk.nerdy.to@gmail.com</p>
            </div>
            <Footer/>
        </>
    );
}

export default AboutUs;
