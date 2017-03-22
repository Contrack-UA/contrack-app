import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';


// Project component
export class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    console.log("esta creando");
    return (
        <div>
            <img className="img-responsive" height="125" width="125" src="./img/folderBlue.png" alt=""/>
            <div>{this.props.project.documents[0].title}</div>
        </div>
    );
  }
}

Project.propTypes = {
  /**projects: PropTypes.array.isRequired,*/
  currentUser: PropTypes.object,
};

export default createContainer(() => {
  return {
    /**Todo esto llega por props*/
    /*projects: Proyectos.find({}, { sort: { createdAt: -1 } }).fetch(),*/
    currentUser: Meteor.user(),
  };
}, Project);
