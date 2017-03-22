import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Matriz from './Matriz.jsx';
import Footer from './Footer.jsx';
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

// Project component
export class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue:''
    }
  }

  handleChange(e){
    this.setState({searchValue: e.target.value});
  }

  render() {
    return (
      <div>
        <div className="row">
          <form>
            <FormGroup controlId="formBasicText">
              <ControlLabel>Busca un contrato</ControlLabel>
              <FormControl type="text" value={this.state.searchValue} placeholder="IDContrato" onChange={this.handleChange}/>
            </FormGroup>
          </form>
        </div>
        <br/>
        <div className="row" id="matrizComponent">
          <div className="col-md-12" id='jumbo'>
          <Matriz lista={this.props.lista} goInvoices={this.props.goInvoices}/>
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
