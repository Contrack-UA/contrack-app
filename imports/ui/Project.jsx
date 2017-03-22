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
    var title = this.props.project.documents[0].title;
    title = title.split(".")[0];
    var amount = this.props.project.documents[0].title;
    title = title.split(".")[0];
    return (
        <div className="proyectoInd">
          <br/><br/><br/><br/>
            <div className="tituloP">
              {title}
            </div>
            <div className="value">
              Costo total: {this.props.project.value.amount}
            </div>
            <div className="url">
              <a href={this.props.project.documents[0].url}>ver contrato completo aquí</a>
            </div>
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
