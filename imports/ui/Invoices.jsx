import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { InvCollection } from '../api/invoices.js';
import Invoice from './Invoice.jsx';

class Invoices extends Component {

  constructor(props) {
    super(props);
    this.state = {
      creating: false
    }
    this.renderInvoices = this.renderInvoices.bind(this);
    this.createInvoice = this.createInvoice.bind(this);
  }

  createInvoice() {
    this.setState({
      creating: true
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
      <div>
        <h3>Facturas relacionadas a {this.props.project} </h3>
        {this.renderInvoices()}
      </div>
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
