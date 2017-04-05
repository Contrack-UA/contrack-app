import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Matriz from './Matriz.jsx';
import Footer from './Footer.jsx';
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

// Project component
export default class Projects extends Component {
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
    console.log('holaaaaaaaa');
    return (
      <div>
      <br/>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-1">
            <i className="fa fa-home fa-3x" onClick={()=>{this.props.goHome()}}></i>
          </div>
          <div className="col-md-10">
            <form>
              <FormGroup controlId="formBasicText">
                <ControlLabel>Busca un contrato</ControlLabel>
                <FormControl type="text" value={this.state.searchValue} placeholder="IDContrato" onChange={this.handleChange}/>
              </FormGroup>
            </form>
          </div>
        </div>
        <br/>
        <div className="row" id="matrizComponent">
          <div className="col-md-12" id='jumbo'>
          <Matriz lista={this.props.lista} goInvoices={this.props.goInvoices} />
          </div>
        </div>
        <br/><br/>
        <Footer page={this.props.page} changePage={this.props.changePage} />
      </div>
    );
  }
}
