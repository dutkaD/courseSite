import React from 'react';
import './Footer.css';
// import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className="row">
        <div className='footer-link-wrapper'>
          <div className='col-sm'>
            <div className='footer-link-items'>
              <h2>О нас</h2>
              <Link to='/aboutus'>О проекте</Link>
              <Link to='/aboutus'>Миссия</Link>
              <Link to='/aboutus'>Партнеры</Link>
            </div>
          </div>
          <div className='col-sm'>
            <div className='footer-link-items'>
              <h2>Написать</h2>
              <Link to='/aboutus'>Вопросы</Link>
              <Link to='/aboutus'>Сотрудничество</Link>
              <Link to='/aboutus'>Спонсоры</Link>
            </div>
          </div>
        </div>
        <div className='col-sm'>
          <div className='footer-link-items'>
            <h2>Найти</h2>
            <a href='https://www.instagram.com/talk.nerdy.tome/'>Instagram</a>
            <a href='https://www.facebook.com/ficus.english.school'>Facebook</a>
            <a href='https://www.youtube.com/channel/UCFnxMeDxsvNwAoGUL6KVW-Q'>Youtube</a>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
          </div>
          <small className='website-rights'>Nerdy Ficus © 2020</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
