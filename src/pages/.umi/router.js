import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/login",
    "component": require('../login').default,
    "exact": true
  },
  {
    "path": "/",
    "component": require('../../layout').default,
    "routes": [
      {
        "path": "/",
        "component": require('../App').default,
        "exact": true
      },
      {
        "path": "/about",
        "component": require('../About').default,
        "exact": true
      },
      {
        "component": require('../404').default,
        "exact": true
      },
      {
        "component": () => React.createElement(require('F:/kkb/react04/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "component": () => React.createElement(require('F:/kkb/react04/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
  }
];
window.g_routes = routes;
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

export default function RouterWrapper() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
