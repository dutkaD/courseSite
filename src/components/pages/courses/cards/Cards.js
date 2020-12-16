import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check it out</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/phone.jpg'
              text='Telegram "silent" speaking club - разговорный клуб'
              label='Speaking club'
              path='/services'
            />
            <CardItem
              src='images/lesson.jpg'
              text='Private zoom lessons'
              label='Classic lesson - частные уроки в ZOOM'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/movies.jpg'
              text='Videos and Movies - ссылки на видео и фильмы'
              label='Resources'
              path='/services'
            />
            <CardItem
              src='images/books.jpg'
              text='Text materials - интересные материалы'
              label='Resources'
              path='/products'
            />
            <CardItem
              src='images/test.jpg'
              text='Тесты и прочее'
              label='Resources'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
