import React from 'react';
import './Footer.css';
// import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class="row">
        <div className='footer-link-wrapper'>
          <div class='col-sm'>
            <div className='footer-link-items'>
              <h2>О нас</h2>
              <Link to='/'>О проекте</Link>
              <Link to='/'>Миссия</Link>
              <Link to='/'>Партнеры</Link>
            </div>
          </div>
          <div class='col-sm'>
            <div className='footer-link-items'>
              <h2>Написать</h2>
              <Link to='/'>Вопросы</Link>
              <Link to='/'>Сотрудничество</Link>
              <Link to='/'>Спонсоры</Link>
            </div>
          </div>
        </div>
        <div className='col-sm'>
          <div className='footer-link-items'>
            <h2>Найти</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              Nerdy Ficus
              <i className='fas fa-glasses' />
            </Link>
          </div>
          <small className='website-rights'>Nerdy Ficus © 2020</small>
          <div className='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
