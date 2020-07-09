import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router'; // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router';

import configureStore, { history } from './configureStore';

import * as serviceWorker from './serviceWorker';

import Home from './pages/Home';
import CreateGame from './pages/CreateGame';
import Game from './pages/Game';

import theme from './theme';

const store = configureStore();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/create-game" component={CreateGame} />
            <Route
              exact
              path="/game/:range/:addition/:subtraction/:level/:minutes"
              component={Game}
            />
            <Route
              render={() => (
                <Alert variant="outlined" severity="warning">
                  This is a warning alert — check it out!
                </Alert>
              )}
            />
          </Switch>
        </ConnectedRouter>
      </Provider>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
