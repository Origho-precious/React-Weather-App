import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Wrapper, Flexbox, Input, Button, Location, Close, Alert } from './searchStyles';
import { searchWeather } from '../../redux/actions';

class Search extends Component {
    state = {
        search: ''
    }

    searchHandler = () => {
      this.props.searchWeather(this.state.search)
    }


    render() {
        return (
          <Wrapper>
            <Close to="/">&times;</Close>
            <Flexbox>
              <Input
                onChange={(e) => this.setState({ search: e.target.value })}
                value={this.state.search}
                type="search"
                placeholder="Search Location"
              />
              <Button onClick={this.searchHandler} type="button">Search</Button>
            </Flexbox>
            { this.props.error ? <Alert>Search Not found!</Alert> : null }
            <Location onClick={() => this.setState({ search: "london" })}>
              London <p>&gt;</p>
            </Location>
            <Location onClick={() => this.setState({ search: "berlin" })}>
              Berlin <p>&gt;</p>
            </Location>
            <Location onClick={() => this.setState({ search: 'barcelona' })}>
              Barcelona <p>&gt;</p>
            </Location>
          </Wrapper>
        );
    }
}

const mapStateToProps = ({ error }) => {
    return {
        error
    }
}

export default connect(mapStateToProps, { searchWeather })(Search);