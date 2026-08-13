import React from 'react';
import { Alert, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import CreateGame from './pages/CreateGame';
import Game from './pages/Game';
import theme from './theme';

const basename = import.meta.env.VITE_BASE_NAME || '';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-game" element={<CreateGame />} />
          <Route
            path="/game/:range/:addition/:subtraction/:multiplication/:level/:minutes"
            element={<Game />}
          />
          <Route
            path="*"
            element={
              <Alert variant="outlined" severity="warning">
                This is a warning alert — check it out!
              </Alert>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
