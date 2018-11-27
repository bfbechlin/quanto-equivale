import React from 'react';
import {
  HashRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import NovaPesquisa from './screens/NovaPesquisa/NovaPesquisa';
import Pesquisa from './screens/Pesquisa';

const theme = createMuiTheme({
  palette: {
    primary: red,
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <HashRouter>
      <Switch>
        <Route path="/pesquisa/:id" component={Pesquisa} />
        <Route path="/nova-pesquisa" component={NovaPesquisa} />
        <Redirect to={{ pathname: '/nova-pesquisa' }} />
      </Switch>
    </HashRouter>
  </MuiThemeProvider>
);

export default App;
