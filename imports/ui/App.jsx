import React, { Component } from 'react';

import HomePage from './HomePage';
import Navbar from './Navbar';
import Projects from './Projects.jsx';


// App component - represents the whole app
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: 'home',
      page:1,
      currentProject: ''
    }
    this.goProjects = this.goProjects.bind(this);
    this.changePage = this.changePage.bind(this);
    this.goInvoices = this.goInvoices.bind(this);
  }

  renderComponent() {
    if(this.state.status === 'home') {
      return (
        <HomePage goProjects={this.goProjects} />
      );
    } else if (this.state.status == 'invoices') {
      return renderInvoices(this.state.currentProject);
    }
    else {
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
  goInvoices(project){
    this.setState({
      status:'invoices',
      currentProject: project
    })
  }
  renderInvoices(project) {
    return (
      <Invoices project={project}/>
    )
  }

  render() {
    return (
      <div className="container">
        {this.renderComponent()}
      </div>
    );
  }
}
