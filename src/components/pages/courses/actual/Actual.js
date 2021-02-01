import React from 'react';
import "./Actual.css"

function Actual() {
    return (
        <>

            <div className="container">
                <h1>Актуальные мероприятия </h1>
                <div className="row">
                    <div className="card card-container">
                        <div className="card-header bg-warning">
                            <h2>Programming for all</h2>
                        </div>
                        <img className="card-img-top card-image" src="images/code.jpeg" alt="Beginner course"/>
                        <div className="card-body">
                            <h4 className="card-title">Курс программирования для совсем начинающих</h4>
                            <p className="card-text">
                                Курс из 5 занятий расчитаный для людей без опыта в программирвоании.
                            </p>
                            <p className="card-text">
                                Начало: 01.03.2021
                            </p>
                            <a href="/programming-for-all" className="btn btn-warning stretched-link">Полное описание курса</a>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}

export default Actual;
