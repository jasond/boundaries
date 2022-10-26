import ReactDOM from 'react-dom';

import PetModule from '../PetModule';

describe('PetModule', () => {
  it('should render into the supplied DOM element', () => {
    const rootElement = document.createElement('div');
    const setRootView = (component) => {
      ReactDOM.render(component, rootElement);
    };

    const integration = { read: ({ onSuccess }) => onSuccess({ pets: [], species: [] }) };
    const module = new PetModule(integration, setRootView);
    module.run();

    expect(rootElement.innerHTML).not.toBe('');
  });
});
