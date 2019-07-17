import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import RegisterVacina from './components/RegisterVacina';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/registrovacina" component={RegisterVacina} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;