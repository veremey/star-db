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

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StarshipDetails } from "../sw-components";

export default class App extends Component {

  swapiService = new SwapiService();

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {
    return (
      <ErrorBoundry>
        <Router>
          <div className="stardb-app">
            <Header />
            <RandomPlanet/>
            <Switch>

              <Route path="/"
                exact
                render={() => {
                  return <h2 className="text-center">Welcome to StarDB</h2>
                }} />
              <Route path="/:*?"
                component={RandomPlanet}
              />
              <Route path="/people" component={PeoplePage}/>
              <Route path="/planets" component={ PlanetPage }/>
              <Route path="/starships" exact component={ StarshipPage }/>
              <Route path="/starships/:id"
                    render={ ({ match }) => {
                    const { id } = match.params;
                    return <StarshipDetails itemId={id}/>
                }}
              />
              <Route render={() => <div className="text-center" ><h3>Page not found</h3><h2> 404  </h2></div>}
               />
            </Switch>
          </div>
        </Router>
      </ErrorBoundry>
    );
  }
}
