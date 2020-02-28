import React, { Component } from 'react';
import { PlanetDetails, PlanetList } from '../sw-components';
import Row from '../row';

export default
  class PlanetPage extends Component {
  state = {
    selectedItem: 11 // default val is null but will show empty box
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;
    return (
      <Row
        left={<PlanetList onItemSelected={this.onItemSelected} />}
        right={<PlanetDetails itemId={selectedItem} />}
      />
    );
  };
}
