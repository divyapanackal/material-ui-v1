import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Grid } from '@material-ui/core';
import Header from './Header';
import Content from './Content';

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header/>
      </Grid>
      <Grid>
        <Container maxWidth="lg">
          <Content />
        </Container>
      </Grid>
    </Grid>
  );
}

export default App;
