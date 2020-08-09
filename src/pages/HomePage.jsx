import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import styles from './homepage.module.scss';
import Showcase from '../components/showcase/Showcase';
import Forecast from '../components/forecasts/Forecast';
import Highlight from '../components/highlights/Highlights';
import Search from '../components/search/Search';
import { searchWeather } from "../redux/actions";

class HomePage extends Component {
  componentDidMount() {
    this.props.searchWeather('lagos');
  }

  renderForecast = () => {
    if(this.props.weather) {
      return this.props.weather.filter((weather, index) => index > 0)
        .map(weather => {
          return (
            <Forecast
              key={weather.id}
              image={weather.weather_state_abbr}
              date={weather.applicable_date}
              temp1={`${weather.min_temp.toFixed(0)}`}
              temp2={`${weather.max_temp.toFixed(0)}`}
            />
          );
        })
    }
  }

  renderHighlights = () => {
    if (this.props.weather) {
      const {
        wind_speed,
        humidity,
        visibility,
        air_pressure,
      } = this.props.weather[0];
      return (
        <>
          <h2>Today's Highlights (4)</h2>
          <div className={styles.highlights}>
            <Highlight>
              <h4>Wind status</h4>
              <h1>{wind_speed.toFixed(0)} mph</h1>
            </Highlight>
            <Highlight>
              <h4>Humidity</h4>
              <h1>{humidity.toFixed(0)} %</h1>
            </Highlight>
            <Highlight>
              <h4>Visibility</h4>
              <h1>{visibility.toFixed(0)} miles</h1>
            </Highlight>
            <Highlight>
              <h4>Air Pressure</h4>
              <h1>{air_pressure.toFixed(0)} mb</h1>
            </Highlight>
          </div>
        </>
      );
    }
  }

  render() {
    if(this.props.weather) {
      
    }

    return (
      <div className={styles.Page}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Showcase} />
            <Route exact path="/search" component={Search} />
          </Switch>
        </BrowserRouter>
        <div className={styles.Section}>
          <div className={styles.forecasts}>
            {this.props.weather ? this.renderForecast() : <h1>Loading...</h1>}
          </div>
          {this.props.weather ? this.renderHighlights() : <h1>Loading...</h1>}
        </div>
      </div>
    );
  }
}


const mapStateToProps = ({ weather: { consolidated_weather } }) => {
  return {
    weather: consolidated_weather
  };
};

export default connect(mapStateToProps, { searchWeather })(HomePage);