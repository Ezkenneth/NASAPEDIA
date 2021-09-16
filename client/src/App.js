/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Search from './pages/Search';
import { Provider } from 'react-redux'
import Store from './utils/Store';


function App() {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',

          primary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
          },
        },
      }),
    [prefersDarkMode],
  );
 
 

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={Store}>
          <Search />
        </Provider>
        
      </ThemeProvider>
     
    );
  }


export default App;
