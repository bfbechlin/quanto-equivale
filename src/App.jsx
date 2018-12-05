import React from 'react';
import {
  HashRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import NovaPesquisa from './screens/NovaPesquisa/NovaPesquisa';
import Pesquisa from './screens/Pesquisa';
import NewScreenHOC from './screens/NewScreenHOC';

const theme = createMuiTheme({
  palette: {
    primary: red,
  },
});

const routes = [
  { path: '/pesquisa/:id', component: Pesquisa, title: 'Pesquisa' },
  { path: '/nova-pesquisa', component: NovaPesquisa, title: 'Nova-Pesquisa' },
];

const App = () => (
  <MuiThemeProvider theme={theme}>
    <HashRouter>
      <Switch>
        { routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            component={NewScreenHOC(route.title)(route.component)}
          />
        ))}
        <Redirect to={{ pathname: '/nova-pesquisa' }} />
      </Switch>
    </HashRouter>
  </MuiThemeProvider>
);

export default App;
