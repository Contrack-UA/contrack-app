import React, { Component } from 'react';
import HomePage from './HomePage';
import Navigbar from './Navigbar';
import Projects from './Projects.jsx';
import Invoices from './Invoices.jsx';

import axios from 'axios';

// App component - represents the whole app
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: 'home',
      page:1,
      pageL:[],
      currentProject: 'prueba'
    } // Cambiar status a invoices para ver las facturas
    this.goProjects = this.goProjects.bind(this);
    this.changePage = this.changePage.bind(this);
    this.goInvoices = this.goInvoices.bind(this);
    this.goHome = this.goHome.bind(this);
  }

  retrievePage(i){
    axios.get("http://datos.colombiacompra.gov.co:8000/releases/contract/?page="+i, {
    }).then(response => {
        console.log(response);
        if (response.data === null) {
            alert("no hay contratos para esta pagina");
        }
        else
        {
            //los proyectos estan en releases
            var list = response.data.releases;
            this.setState({pageL:list,page:i});
        }
    });
  }

  renderComponent() {
    if(this.state.status === 'home') {
      return (
        <HomePage goProjects={this.goProjects} />
      );
    } else if (this.state.status === 'invoices') {
      return this.renderInvoices(this.state.currentProject);
    } else if (this.state.status === 'projects') {
      return (
        <Projects page={this.state.page}
          lista={this.state.pageL} changePage={this.changePage}
          goInvoices={this.goInvoices}
          goHome={this.goHome}/>
      );
    } else {
      return (
        <p>Hola</p>
      )
    }
  }

  goProjects() {
    console.log("GO PROJECTS");
    this.setState({status:'projects'});
  }
  goHome() {
    this.setState({status:'home'});
  }
  changePage(i){
    this.retrievePage(i);
  }
  goInvoices(project){
    console.log("llega el llamado invoices");
    this.setState({
      status:'invoices',
      currentProject: project
    });
  }
  renderInvoices(project) {
    console.log("llega a crear invoices");
    return (
      <Invoices project={project} goHome={this.goHome}/>
    )
  }

  render() {
    if(this.state.pageL.length === 0)
    {
      this.retrievePage(1);
    }
    return (
      <div className="container">
        {this.renderComponent()}
      </div>
    );
  }
}
