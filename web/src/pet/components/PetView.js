import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './PetView.css';
import PetSpeciesAllocator from './PetSpeciesAllocator';

class PetView extends Component {
  renderRow = (pet) => {
    const { species, onAllocate } = this.props;
    const petSpeciesAllocator = (
      <PetSpeciesAllocator
        pet={pet}
        species={species}
        onAllocate={onAllocate}
      />
    );

    return (
      <tr key={pet.name}>
        <td>{pet.name}</td>
        <td>{pet.owner}</td>
        <td>{petSpeciesAllocator}</td>
      </tr>
    );
  }

  render() {
    const { pets } = this.props;
    const petRows = pets.map(pet => this.renderRow(pet));

    return (
      <div className="Pet container">
        <div id="Cat or dog?">
          <table>
            <thead>
                <tr>
                  <th width="30%">Pet Name</th>
                  <th width="40%">Owner</th>
                  <th width="30%">Allocation</th>
                </tr>
            </thead>
            <tbody>
              {petRows}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

PetView.propTypes = {
  species: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onAllocate: PropTypes.func.isRequired,
  pets: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default PetView;
