import browserPlugin from 'router5-plugin-browser';
import createRouter from 'router5';

const initializeRouter = (options) => {
  const {
    routes,
    actions,
    defaultRoute,
  } = options;

  const routerOptions = {
    defaultRoute,
  };

  const router = createRouter(routes, routerOptions);
  router.usePlugin(browserPlugin({ useHash: true }));

  router.subscribe(({ route }) => actions[route.name]());

  router.start();
};

export default initializeRouter;
