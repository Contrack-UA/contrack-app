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
    var title = this.props.project.documents[0].title;
    title = title.split(".")[0];
    var amount = this.props.project.value.amount;
    amount = this.formatMoney(amount,"'",',');
    return (
        <div className="proyectoInd" onClick={()=>{this.props.goInvoices(this.props.project.documents[0].title)}}>
          <br/><br/><br/><br/>
            <div className="tituloP">
              {title}
            </div>
            <div className="value">
              Costo total: {amount}
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
