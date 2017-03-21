import React, { Component } from 'react';

import { Projects } from '../api/projects.js';
import HomePage from './HomePage';
import Navbar from './Navbar';
import Invoice from './Invoice.jsx';
import Project from './Project.jsx';


// App component - represents the whole app
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: 'home'
    }
  }

  renderComponent() {
    if(this.state.status == 'home') {
      return (
        <HomePage />
      );
    } else {
      return (
        <p>Holaaaa</p>
      );
    }
  }

  render() {
    return (
      <div className="container">
        <HomePage/>
      </div>
    );
  }
}
