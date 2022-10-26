import React from 'react';


export default class App {
  constructor(setRootView) {
    this.setRootView = setRootView;
  }

  run = () => {
    this.setRootView(
      <div>
        <h2>Boundaries</h2>
        <ul>
          <li><a href="#/pets"> Pets Screen </a></li>
          <li><a href="#/people"> People Screen </a></li>
          <li><a href="#/places"> Places Screen </a></li>
        </ul>

      </div>,
    );
  }
}
