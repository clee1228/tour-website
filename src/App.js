import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

// MUI
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

// Components 
import Navbar from './layout/Navbar';
import themeFile from './util/theme'; 
// import AuthRoute from './util/AuthRoute';

// Pages
import home from './pages/home';
import tours from './pages/tours';
import contact from './pages/contact';

const theme = createMuiTheme(themeFile);


class App extends Component {
  render(){
    
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
            <Navbar/>
            <div className="app-container">
              <Switch>
                <Route exact path="/" component={home}/>
                <Route exact path="/tours" component={tours}/>
                <Route exact path="/contact" component={contact}/>
              </Switch>
            </div> 
        </Router>
      </MuiThemeProvider>
     
    );
    
  }
  
}

export default App;
