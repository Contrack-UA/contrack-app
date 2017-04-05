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
  formatMoney (n, d, t){
  var
      d = d == undefined ? "." : d,
      t = t == undefined ? "," : t,
      s = n < 0 ? "-" : "$ ",
      i = String(parseInt(n = Math.abs(Number(n) || 0))),
      j = (j = i.length) > 3 ? j % 3 : 0;
     return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t);
   };

  render() {
    console.log("esta creando");
    let project = this.props.project;
    var title = project.tender.description;
    title = title.toLowerCase();

    console.log(title);

    var status = project.tender.status;

    var amount =-1;
    if(project.planning){
      amount = project.planning.budget.amount.amount;
    }
    else if(project.awards[0].value.amount){
      amount = project.awards[0].value.amount;
    }
    console.log(amount);

    amount = this.formatMoney(amount,"'",',');
    return (
        <div className="proyectoInd">
          <br/><br/><br/><br/>
            <div className="tituloP">
              {title}
            </div>
            <div className="value">
              Costo total: {amount}
            </div>
            <div className="url">
              <a  target="_blank"  href={project.uri}>ver contrato completo y documentos aquí</a>
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
