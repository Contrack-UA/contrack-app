import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Matriz from './Matriz.jsx';
import Footer from './Footer.jsx';

// Project component
export class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
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
