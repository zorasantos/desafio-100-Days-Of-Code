import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel'
import Login from './components/Login';
import Registro from './components/Registro'
import RegisterVacina from './components/RegisterVacina';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Carousel />
        <Switch>
        <Route path="/cadastro"component={Registro} />
        <Route exact path="/" component={Login} />
        <Route path="/registrovacina" component={RegisterVacina} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;