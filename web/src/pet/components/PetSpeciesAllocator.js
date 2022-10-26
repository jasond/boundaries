import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class PetSpeciesAllocator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAllocationOptions: false,
    };
  }

  onShowAllocationOptions = () => {
    this.setState({
      showAllocationOptions: true,
    });
  }

  onAllocate = (event) => {
    const { onAllocate, pet } = this.props;
   // console.log(event)
    const species = event.target.value
    this.setState({
      showAllocationOptions: false,
    });
    onAllocate(pet, species);
  }

  renderOptions(species) {

    return(
        <option value={species.name} key={species.name}>{species.name} {species.emoji}</option>
    )
  }

  renderComboBox() {
    const { pet, species } = this.props;
    const options = species.map((s) => this.renderOptions(s));


    return (
      <select name="species" id="species" selected={pet.species}
        onChange={this.onAllocate} >
        <option value=""> choose: </option>
        {options}
      </select>
    );
  }

  renderButton() {
    const { pet } = this.props;
    console.log(pet)
    const label = pet.species ? pet.species : 'Allocate me';
    return (<button onClick={this.onShowAllocationOptions} type="link">{label}</button>);
  }

  render() {
    const { showAllocationOptions } = this.state;
    return showAllocationOptions ? this.renderComboBox() : this.renderButton();
  }
}

PetSpeciesAllocator.propTypes = {
  pet: PropTypes.shape({}).isRequired,
  species: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onAllocate: PropTypes.func.isRequired,
};
