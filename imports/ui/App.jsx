import React, { Component } from 'react';
import HomePage from './HomePage';
import Navbar from './Navbar';
import Projects from './Projects.jsx';
import Invoices from './Invoices.jsx';
import axios from 'axios';

// App component - represents the whole app
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: 'invoices',
      page:1,
      pageL:[],
      currentProject: 'prueba'
    } // Cambiar status a invoices para ver las facturas
    this.goProjects = this.goProjects.bind(this);
    this.changePage = this.changePage.bind(this);
    this.goInvoices = this.goInvoices.bind(this);
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
    } else if (this.state.status == 'invoices') {
      return this.renderInvoices(this.state.currentProject);
    }
    else {
      return (
        <Projects page={this.state.page} lista={this.state.pageL} changePage={this.changePage}/>
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
    this.retrievePage(i);
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
    if(this.state.pageL.length ===0)
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
