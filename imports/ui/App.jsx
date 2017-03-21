import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Invoices } from '../api/invoices.js';
import { Projects } from '../api/projects.js';
import HomePage from './HomePage';
import Navbar from './Navbar';
import Invoice from './Invoice.jsx';
import Project from './Project.jsx';


// App component - represents the whole app
class App extends Component {
  getInvoices() {
    return [
      {
        _id: 1,
        project: 'Ruta del sol',
        responsible: 'Conalvías',
        items: {
          'palasx100': 1000000,
          'cementox5': 1000000,
          'otro': 20000000
        },
        passes: false
      },
      {
        _id: 2,
        project: 'Ruta al mar',
        responsible: 'El Condor',
        items: {
          'palasx100': 100000,
          'cementox5': 5000000,
          'otro': 20000000
        },
        passes: true
      },
    ];
  }

  renderInvoices() {
    return this.props.invoices.map((inv) => (
      <Invoice key={inv._id} inv={inv} />
    ));
  }

  render() {
    return (
      <div className="container">
        <HomePage/>
      </div>
    );
  }
}

App.propTypes = {
  invoices: PropTypes.array.isRequired,
};

export default createContainer(() => {
  var inv = Invoices.find({}, { sort: { createdAt: -1 } }).fetch();
  return {
    invoices: inv,
  };
}, App);
