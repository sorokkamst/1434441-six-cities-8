import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const mainPageValues = {
  PLACES_COUNT: 19,
  PLACES_CARDS: [1, 2, 3, 4, 5],
};

ReactDOM.render(
  <React.StrictMode>
    <App placesCount = {mainPageValues.PLACES_COUNT} placesCards = {mainPageValues.PLACES_CARDS}/>
  </React.StrictMode>,
  document.getElementById('root'));
