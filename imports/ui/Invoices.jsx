import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { InvCollection } from '../api/invoices.js';
import Invoice from './Invoice.jsx';

class Invoices extends Component {

  constructor(props) {
    super(props);
    this.state = {
      creating: false,
      totalValue: 0
    }
    this.renderInvoices = this.renderInvoices.bind(this);
    this.changeCreating = this.changeCreating.bind(this);
  }

  changeCreating() {
    this.setState({
      creating: !this.state.creating
    })
  }

  changeValue(newVal) {
    this.setState({
      totalValue: newVal
    })
  }

  renderForm() {
    if(this.state.creating) {
      return (
        <form>
          <input type="number" ref="total" placeholder="Costo total facturado"/>
        </form>
      );
    } else {
      return (
        <button className="btn btn-success">
          Crear factura
        </button>
      )
    }
  }

  renderInvoices() {
    return this.props.invoices.filter((inv) => {
      return inv.project == this.props.project
    }).map((inv) => (
      <Invoice key={inv._id} inv={inv} />
    ));
  }

  render() {
    return (
      <div className="row">
        <br/><br/>
      <div className="col-md-1"><i className="fa fa-home fa-3x" onClick={()=>{this.props.goHome()}}></i></div>
      <div className="col-md-10">
        <h3>Facturas relacionadas a {this.props.project} </h3>
        {
          this.state.creating?(
            <div>
              <form>
                <label>Valor total: </label>
                <input type="number" placeholder="00" onChange={(event)=>{
                  this.changeValue(event.target.value);
                }}/>
              </form>
              <button className="btn btn-success" onClick={() => {
                this.changeCreating()
              }}>Guardar</button>
              <button className="btn btn-danger" onClick={() => {
                this.changeCreating()
              }}>Cancelar</button>
            </div>
          ):(
            <div>
              <button className="btn btn-primary" onClick={() => {
                this.changeCreating()
              }}>Agregar</button>
            </div>
          )
        }
        {this.renderInvoices()}
      </div></div>
    );
  }
}

Invoices.propTypes = {
  invoices : PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    invoices: InvCollection.find({}, { sort: { createdAt: -1 } }).fetch()
  };
}, Invoices);
