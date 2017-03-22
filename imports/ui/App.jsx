import React, { Component } from 'react';

import HomePage from './HomePage';
import Navbar from './Navbar';
import Invoice from './Invoice.jsx';
import Projects from './Projects.jsx';


// App component - represents the whole app
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: 'home',
      page:1
    }
    this.goProjects = this.goProjects.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  renderComponent() {
    if(this.state.status === 'home') {
      return (
        <HomePage goProjects={this.goProjects} />
      );
    } else {
      return (
        <Projects page={this.state.page} changePage={this.changePage}/>
      );
    }
  }

  goProjects() {
    this.setState({status:'projects'});
  }
  goHome() {
    this.setState({status:'home'});
  }
  changePage(i){
    this.setState({page:i});
  }

  render() {
    return (
      <div className="container">
        {this.renderComponent()}
      </div>
    );
  }
}
