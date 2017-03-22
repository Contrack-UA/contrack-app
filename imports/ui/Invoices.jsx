import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { collection } from '../api/invoices.js';
import Invoice from './Invoice.jsx';

class Invoices extends Component {

  constructor(props) {
    super(props);
  }

  renderInvoices() {
    return this.props.invoices.map((inv) => (
      <Invoice key={inv._id} inv={inv} />
    ));
  }

  render() {
    return (
      <div>
        <h3>Name</h3>
        {this.renderInvoices()}
      </div>
    );
  }
}

Invoices.propTypes = {
  inv : PropTypes.object.isRequired,
};

export default createContainer(() => {
  var inv = Invoices.find({project: this.props.project}, { sort: { createdAt: -1 } }).fetch();
  return {
    invoices: inv,
  };
}, Invoices);
