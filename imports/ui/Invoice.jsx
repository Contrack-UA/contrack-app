import React, { Component, PropTypes } from 'react';

// Task component - represents a single todo item
export default class Invoice extends Component {
  render() {
    return (
      <div>
        <h3>By {this.props.inv.responsible}</h3>
        {
          this.props.inv.passes ? <p>Passes</p> : <p>Doesn't pass</p>
        }
      </div>
    );
  }
}

Invoice.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  inv: PropTypes.object.isRequired,
};
