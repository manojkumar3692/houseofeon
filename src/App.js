import React, { useRef } from 'react';
import AppRouter from './Router';
import './App.css';
import { ThemeProvider } from 'styled-components';


const theme = {
  colors: {
    primary: '#fff',
    secondary: 'rgb(254, 180, 6)',
    background: '#000',
    text: '#fff',
  },
  fonts: {
    main: "'Poppins', sans-serif",
  },

}
const App = () => {

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </>
  );
};

export default App;
