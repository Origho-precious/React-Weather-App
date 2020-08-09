import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Wrapper,
    Background,
    SearchButton,
    Image,
    Temp,
    Description,
    Date,
    Location,
    weatherImages
} from "./showcaseStyles";
import weatherImg from '../../assets/LightRain.png';
import { getDate } from '../forecasts/getDate';


class Showcase extends Component{
  componentDidMount() {
    this.displayWeather()
  }

  displayWeather = () => {
  const { weather } = this.props
    if (weather) {
      const { applicable_date, the_temp, weather_state_name, weather_state_abbr } = weather[0];
      const { location } = this.props;
      

      return (
        <>
          <Image src={weatherImages[weather_state_abbr]} />
          <Temp>
            {the_temp.toFixed(0)}
            <span>&deg;c</span>
          </Temp>
          <Description>{weather_state_name}</Description>
          <Date>Today - {getDate(applicable_date)}</Date>
          <Location>
            <i className="fas fa-map-marker-alt"></i>&nbsp; {location}
          </Location>
        </>
      );
    }
  }

  render() {
    if(this.props.weather){
      return (
        <Wrapper>
          <Background />
            <SearchButton to="/search">Search for places</SearchButton>
          { this.displayWeather() }
        </Wrapper>
      );
    }

    return (
      <Wrapper>
        <Background />
        <SearchButton to="/search">
          Search for places
        </SearchButton>
        <Image src={weatherImg} />
        <Description>Loading</Description>
        <Date>Today</Date>
        <br/>
        <Location>
          <i className="fas fa-map-marker-alt"></i>&nbsp; Loading
        </Location>
      </Wrapper>
    );
  }
  
}


const mapStateToProps = ({weather}) => {
  return {
    weather: weather.consolidated_weather,
    location: weather.title
  };
};

export default connect(mapStateToProps)(Showcase);