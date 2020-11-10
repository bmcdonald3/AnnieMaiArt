import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './fonts.css'
import Artwork from './components/Artwork';
import Sidebar2 from './components/Sidebar2';
import ClosePainting from './components/ClosePainting';
import Contact from './components/Contact'


import { createMuiTheme, Grid, ThemeProvider } from '@material-ui/core'

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Playfair Display SC'
  }
});

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Grid container>
        <Router>
          <Grid item sm={2}>
            <Sidebar2 />
          </Grid>

          <Grid item sm={8} xs={12}>
            <Switch>
                <Route path='/' exact component={Artwork} />
                <Route path='/about' exact />
                <Route path='/paint1' exact component={ClosePainting} />
                <Route path='/purchase' exact component={Contact} />
            </Switch>
          </Grid>
          <Grid item sm={2} />
        </Router>

      </Grid>
      </ThemeProvider>
    </>
  );
}

export default App;
