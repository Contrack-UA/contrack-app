import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import axios from 'axios';
import Matriz from './Matriz.jsx';
import Footer from './Footer.jsx';

// Project component
export class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista:[]
    }
  }

  renderComponent(){
    var i = this.props.page;
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
            this.setState({lista:list});
        }
    });
  }

  render() {
    var matriz;
    if(this.state.lista.length !==0)
    {
      console.log("crea matriz ");
      matriz= (<Matriz lista={this.state.lista}/>);
    }
    else {
      this.renderComponent();
    }
    return (
      <div>
        <br/><br/><br/>
        <div className="row" id="matrizComponent">
          <div className="col-md-12" id='jumbo'>
          {matriz}
          </div>
        </div>
        <br/><br/>
        <Footer page={this.props.page} changePage={this.props.changePage}/>
      </div>
    );
  }
}

Projects.propTypes = {
  /**projects: PropTypes.array.isRequired,*/
  currentUser: PropTypes.object,
};

export default createContainer(() => {
  return {
    /**Todo esto llega por props*/
    /*projects: Proyectos.find({}, { sort: { createdAt: -1 } }).fetch(),*/
    currentUser: Meteor.user(),
  };
}, Projects);
