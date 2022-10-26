import ReactDOM from 'react-dom';


import './index.css';
import App from './App';
import PetModule from './pet/PetModule';
import initalizeRouter from './router';
import Config,  {  initializeConfig } from './Config';


async function main(integrationType) {

  await initializeConfig();

  const Integration = (await import(`./integration/${integrationType}Integration.js`)).default;

  const root = document.getElementById('app');

  const setRootView = (component) => {
    ReactDOM.render(component, root);
  };

  const integration = Integration();

  const app = new App(setRootView);
  const pets = new PetModule(integration, setRootView);

  const routes = [
    { name: 'home', path: '/home' },
    { name: 'pets', path: '/pets' },
  ];

  const actions = {
    home: () => { app.run(); },
    pets: () => { pets.run(); },
  };

  initalizeRouter({
    routes,
    actions,
    defaultRoute: 'home',
  });
}

main(
  process.env.REACT_APP_INTEGRATION_TYPE,
);
