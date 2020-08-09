import React from 'react';
import { Wrapper, Image, Flexbox, weatherImages } from './forecastStyles';
import { getDate } from './getDate';

const Forecast = ({ date, image, temp1, temp2 }) => {
  return (
    <Wrapper>
      <h4>{ getDate(date) }</h4>
      <Image src={weatherImages[image] } />
      <Flexbox>
        <p>{temp1}&deg;C</p>
        <p>{temp2}&deg;C</p>
      </Flexbox>
    </Wrapper>
  );
}

export default Forecast;