import React from 'react';
import ReactDOM from 'react-dom';

import PetView from '../PetView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const pets = [];
  const species = [];
  ReactDOM.render(<PetView pets={pets} species={species} onAllocate={() => {}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
