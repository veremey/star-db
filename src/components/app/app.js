import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import Row from '../row';
import {
  PeoplePage,
  PlanetPage,
  StarshipPage } from '../pages';

import SwapiService from "../../services/swapi-service";

import './app.css';

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
        <div className="stardb-app">
          <Header />

          {planet}

          <PeoplePage />
          <PlanetPage />
          <StarshipPage />

        </div>
      </ErrorBoundry>
    );
  }
}
