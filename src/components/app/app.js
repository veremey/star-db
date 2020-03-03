import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';

import {
  PeoplePage,
  PlanetPage,
  StarshipPage } from '../pages';

import SwapiService from "../../services/swapi-service";

import './app.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {
    const planet = this.state.showRandomPlanet ?
      <RandomPlanet /> :
      null;

    return (
      <ErrorBoundry>
        <Router>
          <div className="stardb-app">
            <Header />

            {planet}

            <Route path="/"
              exact
              render={() => {
                return <h2>Welcome to StarDB</h2>
              }} />
            <Route path="/people" component={PeoplePage}/>
            <Route path="/planets" component={ PlanetPage }/>
            <Route path="/starships" component={ StarshipPage }/>

          </div>
        </Router>
      </ErrorBoundry>
    );
  }
}
