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
    this.goProjects = this.goProjects.bind(this);
  }

  renderComponent() {
    if(this.state.status === 'home') {
      return (
        <HomePage goProjects={this.goProjects} />
      );
    } else {
      return (
        <Project/>
      );
    }
  }

  goProjects() {
    this.setState({status:'projects'});
  }
  goHome() {
    this.setState({status:'home'});
  }

  render() {
    return (
      <div className="container">
        {this.renderComponent()}
      </div>
    );
  }
}
