import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className='footer-link-items'>
                            <h2>О нас</h2>
                            <Link to='/aboutus'>О проекте</Link>
                            <Link to='/aboutus'>Миссия</Link>
                            <Link to='/aboutus'>Партнеры</Link>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className='footer-link-items'>
                            <h2>Написать</h2>
                            <Link to='/aboutus'>Вопросы</Link>
                            <Link to='/aboutus'>Сотрудничество</Link>
                            <Link to='/aboutus'>Спонсоры</Link>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className='footer-link-items'>
                            <h2>Найти</h2>
                            <a href='https://www.instagram.com/talk.nerdy.tome/'>Instagram TNTM</a>
                            <a href='https://www.facebook.com/ficus.english.school'>Facebook Ficus</a>
                            <a href='https://www.youtube.com/channel/UCFnxMeDxsvNwAoGUL6KVW-Q'>Youtube TNTM</a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-end">
                    <small className='website-rights'>Nerdy Ficus © 2020</small>
                </div>
            </div>
        </div>


    );
}

export default Footer;
