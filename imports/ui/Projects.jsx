import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Proyectos } from '../api/projects.js';
// Project component
export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  renderComponent(){
    var i = this.props.page;
  }

  render() {
    return (
      <div className="row">
        {this.props.projects.map((ingredient,i)=> {
                return <Ingredient name={ingredient.ingrediente} key={i}/>
              })}
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
}, App);
