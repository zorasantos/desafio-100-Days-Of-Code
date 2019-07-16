import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import RegisterVacina from './components/RegisterVacina';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <RegisterVacina />
      </React.Fragment>
    );
  }
}

export default App;